import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";

// const contentDir = "./content";
const contentDir = path.join(process.cwd(), "content");

interface Project {
    id: number;
    name: string;
    role: string;
    year: string;
    link: string;
    icon: string;
    color: string;
    hasCases: boolean;
    slug: string;
}

export const parseContent = async (): Promise<Project[]> => {
  try {
    const projects: Project[] = [];
    const dirs = await fs.readdir(contentDir);

    for (const dir of dirs) {
      const dirPath = path.join(contentDir, dir);
      try {
        const stats = await fs.stat(dirPath);
        if (!stats.isDirectory()) continue;

        const indexPath = path.join(dirPath, "index.md");
        const fileContent = await fs.readFile(indexPath, "utf8");
        const { data } = matter(fileContent);
        const hasCases = Array.isArray(data.cases) && data.cases.length > 0;

        projects.push({
          id: projects.length + 1,
          name: data.name,
          role: data.role || "",
          year: data.timeline || "",
          link: data.link || "",
          icon: `/${data.icon || "deliveroo-icon.png"}`,
          color: data.color || "#000000",
          hasCases,
          slug: data.name.toLowerCase().replace(/\s+/g, "-"),
        });
      } catch (error) {
        console.error(`Error processing directory ${dirPath}:`, error);
      }
    }

    return projects;
  } catch (error) {
    console.error("Error accessing content directory:", error);
    return [];
  }
};