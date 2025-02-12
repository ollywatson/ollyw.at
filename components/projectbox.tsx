import React from 'react';
import ProjectRow from './projectrow';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

const contentDir = './content';

interface Project {
    id: number;
    name: string;
    role: string;
    year: string;
    link: string;
    icon: string;
    color: string;
    hasCases: boolean;
    slug: string; // Added slug property
}

const parseContent = async () => {
    const projects: Project[] = [];
    const dirs = await fs.readdir(contentDir);
    for (const dir of dirs) {
        const dirPath = path.join(contentDir, dir);
        const stats = await fs.stat(dirPath);
        if (stats.isDirectory()) {
            const indexPath = path.join(dirPath, 'index.md');
            try {
                const fileContent = await fs.readFile(indexPath, 'utf8');
                const { data } = matter(fileContent);
                const hasCases = data.cases && data.cases.length > 0;
                projects.push({
                    id: projects.length + 1,
                    name: data.name,
                    role: data.role || '',
                    year: data.timeline || '',
                    link: data.link || '',
                    icon: `/${data.icon || 'deliveroo-icon.png'}`, // Adjusted icon path for direct public access
                    color: data.color || '#000000', // Added color property with default value
                    hasCases: hasCases, // Added hasCases property
                    slug: data.name.toLowerCase().replace(/\s+/g, '-'),
                });
            } catch (error) {
                console.error(`Error reading index.md in ${dirPath}:`, error);
            }
        }
    }
    return projects;
};

const ProjectBoxAlt = async () => {
    const projects = await parseContent();

    return (
        <div className="mt-4 overflow-hidden group">
            {projects.map((project, index) => (
                <div key={project.id} className="relative">
                    <ProjectRow project={project} />
                    {index !== projects.length - 1 && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                            <div className="mx-[20px] h-full bg-borderLight rounded-full" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectBoxAlt;