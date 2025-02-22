import React from 'react';
// import AnimatedIconWrapper from './animatediconwrapper';
import Image from 'next/image';
import Link from 'next/link';
import { getProjectCases } from '@/utils/getProjectCases';

interface Project {
    cases: string[]; // Array of case strings
    slug: string; // Slug property
}

const ProjectRow = async ({ project }: { project: { name: string; role: string; year: string; link: string; linktype: string; icon: string; color: string; hasCases: boolean; slug: string } }) => {
    const { name, role, year, link, icon, color, hasCases, slug } = project; // Destructure imageUrl, color, hasCases, and slug
    const isExternal = link.startsWith('http');
   
    const cases = await getProjectCases();
    const currentProjectCases: string[] = cases
        .filter((project: Project) => project?.slug === slug) // Filter by slug
        .flatMap((project: Project) => project.cases); // Extract and flatten the cases array

    return (
        <a
            href={hasCases ? `/projects/${slug}/${currentProjectCases[0]}` : link}
            className={`button-container flex justify-between items-center p-5 text-primary rounded-[26px] transition-colors duration-300 hover:bg-selectorBg ${color} relative group`}
            {...(project.linktype === 'download' ? { download: true } : {})}
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
                        width={36}
                        height={36}
                        className="rounded-lg"
                        priority // Add priority for above-the-fold images
                    />
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p className="text-base font-semibold">{name}</p>
                        {hasCases && <div className="p-[3px] pr-[5px] pt-[5px] rounded-full bg-selectorBgTransparent"><Image src="/arrow-up-mini.svg" alt="Arrow Up" width={18} height={18} /></div>}
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-sm text-tertiary">{role}</p>
                        <p className="text-sm text-tertiary">{year}</p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default ProjectRow;