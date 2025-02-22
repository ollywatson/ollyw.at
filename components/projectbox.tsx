import React from 'react';
import ProjectRow from './projectrow';
import { parseContent } from '@/utils/parseContent';

const ProjectBoxAlt = async () => {
    const projects = await parseContent();

    return (
        <div className="mt-2 px-1 overflow-hidden group">
            {projects?.map((project, index) => (
                <div key={project.id} className="relative">
                    <ProjectRow project={project} />
                    {index !== projects.length - 1 && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                            <div className="mx-6 h-full bg-borderLight opacity-50 rounded-full" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectBoxAlt;