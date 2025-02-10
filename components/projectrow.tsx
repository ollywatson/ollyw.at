import React from 'react';
import AnimatedIconWrapper from './animatediconwrapper';
import Image from 'next/image';

const ProjectRow = ({ project }: { project: { name: string; role: string; year: string; link: string; imageUrl: string } }) => {
    const { name, role, year, link, imageUrl } = project; // Destructure imageUrl
    const isExternal = link.startsWith('http');

    return (
        <a 
            href={link} 
            className="button-container flex justify-between items-center p-[26px] bg-white hover:bg-borderLight text-secondary hover:text-primary"
            {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer" 
            })}
        >
            <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-6 bg-black">
                    <Image 
                        src={imageUrl} // Use destructured imageUrl
                        alt={`${name} logo`}
                        width={40}
                        height={40}
                        className="rounded-lg"
                        priority // Add priority for above-the-fold images
                    />
                </div>
                <div className="flex-grow">
                    <p className="text-base font-bold">{name}</p>
                    <p className="text-base text-tertiary">{year} · {role}</p>
                </div>
            </div>
            <div className="p-[10px] border-2 border-borderLight rounded-full bg-white">
                <div className="w-5 h-5 relative">
                    <AnimatedIconWrapper>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 15L15 5M15 5L7.14286 5M15 5V12.8571" className="stroke-current" stroke-width="2.14286" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </AnimatedIconWrapper>
                </div>
            </div>
        </a>
    );
};

export default ProjectRow;