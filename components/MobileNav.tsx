'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProjectData {
    id: number;
    name: string;
    role: string;
    year: string;
    link: string;
    icon: string;
    color: string;
    hasCases: boolean;
    slug: string;
}

interface PageProps {
    slug: string;
    slugItem: string;
    projectData: ProjectData[]; // Array of ProjectData objects
    currentProjectCases: string[]; // Add this prop
}

export default function MobileNav({ slug, slugItem, projectData, currentProjectCases }: PageProps) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const renderTabs = () => {
        return currentProjectCases.map((caseItem: string) => {
            // Perform string modifications
            const formattedCaseItem = caseItem
                .replace(/-/g, ' ') // Replace hyphens with spaces
                .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word

            return (
                <button
                    key={caseItem}
                    className={`flex items-center p-4 justify-between relative w-full h-[62px] ${slugItem === caseItem ? 'bg-selectorBg' : ''} ${caseItem !== currentProjectCases[0] ? 'border-t border-borderLight' : ''}`}
                    onClick={() => router.push(`/projects/${slug}/${caseItem}`)}
                >
                    {formattedCaseItem}
                </button>
            );
        });
    };

    return (
        <div className='relative border-b border-borderLight bg-background'>
            <div className='flex items-center justify-between'>
                <div className='py-6'>
                    <h4 className='text-base md:text-base-md font-bold text-primary'>{projectData[0].name}</h4>
                    <div className='text-sm md: text-sm-md text-secondary'>
                        <p className=''>{projectData[0].role}  ·  {projectData[0].year}</p>
                    </div>
                </div>
                <button
                    className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5"
                    onClick={toggleMenu}
                >
                    {/* Top Dash */}
                    <span
                        className={`block w-8 h-1 rounded-2xl bg-[#2E3741] transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[2px]' : ''
                            }`}
                    ></span>
                    {/* Bottom Dash */}
                    <span
                        className={`block w-8 h-1 rounded-2xl bg-[#2E3741] transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-[50deg] -translate-y-2' : ''
                            }`}
                    ></span>
                </button>
            </div>

            {/* Navigation Menu */}
            <div
                className={`absolute w-full flex left-0 top-[calc(100%+20px)] rounded-3xl overflow-hidden flex-col items-start border border-borderLight bg-background transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
            >
                {renderTabs()}
            </div>
        </div>
    );
}