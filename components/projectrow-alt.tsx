import React from 'react';
import AnimatedIconWrapper from './animatediconwrapper';
import Image from 'next/image';

const ProjectRowAlt = ({ project }: { project: { name: string; role: string; year: string; link: string; icon: string; color: string; hasCases: boolean } }) => {
    const { name, role, year, link, icon, color, hasCases } = project; // Destructure imageUrl, color, and hasCases
    const isExternal = link.startsWith('http');

    return (
        <a 
            href={link} 
            className={`button-container flex justify-between items-center p-[20px] text-primary rounded-[26px] transition-colors duration-300 hover:bg-buttonBg ${color} relative group`}
            {...(isExternal && {
                target: "_blank",
                rel: "noopener noreferrer" 
            })}
        >
            <div className="flex items-center space-x-4 w-full">
                <div className={`flex-shrink-0 p-[6px] rounded-full`} style={{ backgroundColor: color }}>
                    <Image 
                        src={icon} // Use destructured imageUrl
                        alt={`${name} logo`}
                        width={40}
                        height={40}
                        className="rounded-lg"
                        priority // Add priority for above-the-fold images
                    />
                </div>
                <div className="w-full">
                    <p className="text-base md:text-base-md font-bold">{name}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-sm md:text-sm-md text-tertiary">{role}</p>
                        <p className="text-sm md:text-sm-md text-tertiary">{year}</p>
                    </div>
                </div>
                {hasCases && (
                    <div className="absolute right-0 top-0 bottom-0 left-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 duration-300 flex items-center">
                            <div className="p-[12px] rounded-full bg-white flex items-center">
                                <div className="p-[6px] flex items-center">
                                    <p className="text-primary text-sm md:text-sm-md font-bold">View work</p>
                                    <div className="relative w-[20px] h-[20px]">
                                        <AnimatedIconWrapper>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 15L15 5M15 5L7.14286 5M15 5V12.8571" className="stroke-primary" stroke-width="2.14286" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </AnimatedIconWrapper>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </a>
    );
};

export default ProjectRowAlt;