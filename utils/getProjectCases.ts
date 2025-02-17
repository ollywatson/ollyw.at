import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";

const contentDir = "./content";

interface Project {
  cases: string[];
  slug: string;
}

export const getProjectCases = async (): Promise<Project[]> => {
  const projects: Project[] = [];

  try {
    // Read the content directory
    const dirs = await fs.readdir(contentDir);

    // Process each directory
    for (const dir of dirs) {
      const dirPath = path.join(contentDir, dir);

      try {
        // Check if the path is a directory
        const stats = await fs.stat(dirPath);
        if (!stats.isDirectory()) {
          console.warn(`Skipping non-directory: ${dirPath}`);
          continue;
        }

        // Check if index.md exists
        const indexPath = path.join(dirPath, "index.md");
        try {
          await fs.access(indexPath); // Check if the file exists
        } catch (error) {
          console.warn(`index.md not found in directory: ${dirPath}`);
          continue;
        }

        // Read and parse the index.md file
        const fileContent = await fs.readFile(indexPath, "utf8");
        const { data } = matter(fileContent);

        // Validate required fields
        if (!data.cases || !Array.isArray(data.cases)) {
          console.warn(`Invalid or missing 'cases' field in ${dirPath}/index.md`);
          continue;
        }
        if (!data.name || typeof data.name !== "string") {
          console.warn(`Invalid or missing 'name' field in ${dirPath}/index.md`);
          continue;
        }

        // Add the project to the list
        projects.push({
          cases: data.cases,
          slug: data.name.toLowerCase().replace(/\s+/g, "-"),
        });
      } catch (error) {
        console.error(`Error processing directory ${dirPath}:`, error);
      }
    }
  } catch (error) {
    console.error(`Error reading content directory ${contentDir}:`, error);
  }

  return projects;
};