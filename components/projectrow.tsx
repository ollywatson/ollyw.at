import React from 'react';
// import AnimatedIconWrapper from './animatediconwrapper';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectCases } from '@/utils/getProjectCases';

interface Project {
    cases: string[]; // Array of case strings
    slug: string; // Slug property
}

const ProjectRow = async ({ project }: { project: { name: string; role: string; year: string; link: string; icon: string; color: string; hasCases: boolean; slug: string } }) => {
    const { name, role, year, link, icon, color, hasCases, slug } = project; // Destructure imageUrl, color, hasCases, and slug
    const isExternal = link.startsWith('http');
   
    const cases = await getProjectCases();
    const currentProjectCases: string[] = cases
        .filter((project: Project) => project?.slug === slug) // Filter by slug
        .flatMap((project: Project) => project.cases); // Extract and flatten the cases array

    return (
        <Link
            href={hasCases ? `/projects/${slug}/${currentProjectCases[0]}` : link}
            className={`button-container flex justify-between items-center p-[20px] text-primary rounded-[26px] transition-colors duration-300 hover:bg-selectorBg ${color} relative group`}
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
                        <p className="text-base md:text-base-md text-tertiary">{role}</p>
                        <p className="text-base md:text-base-md text-tertiary">{year}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectRow;