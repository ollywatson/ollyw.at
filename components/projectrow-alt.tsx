import React from 'react';
import AnimatedIconWrapper from './animatediconwrapper';
import Image from 'next/image';

const ProjectRowAlt = ({ project }: { project: { name: string; role: string; year: string; link: string; imageUrl: string } }) => {
    const { name, role, year, link, imageUrl } = project; // Destructure imageUrl
    const isExternal = link.startsWith('http');

    return (
        <a 
            href={link} 
            className="button-container flex justify-between items-center p-[20px] text-primary rounded-[26px] transition-colors duration-300 hover:bg-buttonBg"
            {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer" 
            })}
        >
            <div className="flex items-center space-x-4 w-full">
                <div className="flex-shrink-0">
                    <Image 
                        src={imageUrl} // Use destructured imageUrl
                        alt={`${name} logo`}
                        width={52}
                        height={52}
                        className="rounded-lg"
                        priority // Add priority for above-the-fold images
                    />
                </div>
                <div className="w-full">
                    <p className="text-sm md:text-sm-md font-bold">{name}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-sm md:text-sm-md text-secondary">{role}</p>
                        <p className="text-sm md:text-sm-md text-secondary">{year}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectRowAlt;