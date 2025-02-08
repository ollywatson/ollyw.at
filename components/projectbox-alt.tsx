import React from 'react';
import ProjectRowAlt from './projectrow-alt';

const projects = [
    { id: 1, name: 'Deliveroo', role: 'Staff Product Designer', year: '2021 - present', link: '/deliveroo', imageUrl: '/deliveroo-icon.png' },
    { id: 2, name: 'Voicey', role: 'Personal Side Project', year: '2021 - present', link: 'https://voicey.com', imageUrl: '/voicey-icon.png' },
    { id: 3, name: 'Rhinestone', role: 'Lead Designer', year: '2023 – 2024', link: 'https://kantan.com', imageUrl: '/rhinestone-icon.png' }
];

const ProjectBoxAlt = () => {
    return (
        <div className="mt-4 overflow-hidden group">
            {projects.map((project, index) => (
                <div key={project.id} className="relative">
                    <ProjectRowAlt project={project} />
                    {index !== projects.length - 1 && (
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                            <div className="mx-[26px] h-full bg-borderLight rounded-full" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectBoxAlt;