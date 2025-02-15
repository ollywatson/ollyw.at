import matter from "gray-matter";
import fs from "fs/promises";
import path from "path";

const contentDir = "./content";

export const parseContent = async (slug:string, activeContent:string) => {
  const dirs = await fs.readdir(contentDir);

  for (const dir of dirs) {
    if (dir.split(" ")[1] === slug) {
      const dirPath = path.join(contentDir, dir);

      const stats = await fs.stat(dirPath);
      if (stats.isDirectory()) {
        const dirFiles = await fs.readdir(dirPath);
        const dataFile = dirFiles.filter((file) => `${activeContent.toLowerCase()}.md` === file.split('-').join(''));

        const filePath = path.join(dirPath, dataFile[0]);
        try {
          const fileContent = await fs.readFile(filePath, "utf8");
          const { data, content } = matter(fileContent);
          return {data, content};
        } catch (error) {
          console.error(`Error reading index.md in ${dirPath}:`, error);
        }
      }
    }
  }
};
