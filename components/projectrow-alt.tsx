import React from 'react';
import AnimatedIconWrapper from './animatediconwrapper';
import Image from 'next/image';
import Link from 'next/link';

const ProjectRowAlt = ({ project }: { project: { name: string; role: string; year: string; link: string; icon: string; color: string; hasCases: boolean; slug: string } }) => {
    const { name, role, year, link, icon, color, hasCases, slug } = project; // Destructure imageUrl, color, hasCases, and slug
    const isExternal = link.startsWith('http');

    return (
        <Link 
            href={hasCases ? `/projects/${slug}` : link} 
            className={`button-container flex justify-between items-center p-[20px] text-primary rounded-[26px] transition-colors duration-300 hover:bg-buttonBg ${color} relative group`}
            {...(isExternal && !hasCases && {
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
            </div>
        </Link>
    );
};

export default ProjectRowAlt;