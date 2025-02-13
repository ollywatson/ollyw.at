import React from 'react';
import ProjectRow from './projectrow';

import { data } from '@/content/data';


const ProjectBoxAlt = async () => {
    return (
        <div className="mt-4 overflow-hidden group">
            {data.map((project, index) => (
                <div key={project.id} className="relative">
                    <ProjectRow project={project} />
                    {index !== data.length - 1 && (
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