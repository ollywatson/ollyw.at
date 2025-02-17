import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";

const contentDir = "./content";

export const getProjectData = async (slug: string, activeContent: string) => {
  try {
    const dirs = await fs.readdir(contentDir);

    for (const dir of dirs) {
      if (dir.split(" ")[1] === slug) {
        const dirPath = path.join(contentDir, dir);

        const stats = await fs.stat(dirPath);
        if (stats.isDirectory()) {
          const dirFiles = await fs.readdir(dirPath);
          const dataFile = dirFiles.find((file) => `${activeContent.toLowerCase()}.md` === file.split('-').join(''));

          if (!dataFile) {
            // console.error(`File for activeContent "${activeContent}" not found in directory "${dirPath}"`);
            return { data: null, content: null };
          }

          const filePath = path.join(dirPath, dataFile);
          const fileContent = await fs.readFile(filePath, "utf8");
          const { data, content } = matter(fileContent);

          return { data, content };
        }
      }
    }

    console.error(`Directory with slug "${slug}" not found in "${contentDir}"`);
    return { data: null, content: null };
  } catch (error) {
    console.error(`Error in getProjectData:`, error);
    return { data: null, content: null };
  }
};