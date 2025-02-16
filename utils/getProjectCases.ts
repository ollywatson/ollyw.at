import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";

const contentDir = "./content";

interface Project {
  cases: string[];
  slug: string;
}

export const getProjectCases = async () => {
  const projects: Project[] = [];
  const dirs = await fs.readdir(contentDir);
  for (const dir of dirs) {
    const dirPath = path.join(contentDir, dir);
    const stats = await fs.stat(dirPath);
    if (stats.isDirectory()) {
      const indexPath = path.join(dirPath, "index.md");
      try {
        const fileContent = await fs.readFile(indexPath, "utf8");
        const { data } = matter(fileContent);
        const hasCases = data.cases && data.cases.length > 0;
        projects.push({
          cases: data.cases,
          slug: data.name.toLowerCase().replace(/\s+/g, "-"),
        });
      } catch (error) {
        console.error(`Error reading index.md in ${dirPath}:`, error);
      }
    }
  }
  return projects;
};
