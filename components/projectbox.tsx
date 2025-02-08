import React from 'react';
import ProjectRow from './projectrow';

const projects = [
    { id: 1, name: 'Deliveroo', role: 'Staff Product Designer', year: '2021 - present', link: '/deliveroo', imageUrl: '/deliveroo-icon.png' },
    { id: 2, name: 'Voicey', role: 'Founder, designer, engineer', year: '2021 - present', link: 'https://voicey.com', imageUrl: '/voicey-icon.png' },
    { id: 3, name: 'Kantan', role: 'Founding designer', year: '2019', link: 'https://kantan.com', imageUrl: '/kantan.png' }
];

const ProjectBox = () => {
    return (
        <div className="mt-4 border-2 border-borderLight rounded-2xl overflow-hidden [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-borderLight">
            {projects.map(project => (
                <ProjectRow key={project.id} project={project} />
            ))}
        </div>
    );
};

export default ProjectBox;