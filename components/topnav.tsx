'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import MiniButton from './minibutton';
import BackButton from './BackButton';
import Image from 'next/image';

interface ProjectData {
    id: number;
    name: string;
    role: string;
    year: string;
    link: string;
    linkname: string;
    icon: string;
    color: string;
    hasCases: boolean;
    slug: string;
}
interface Data {
    name: string;
    timeline: number;
}
interface PageProps {
    slug: string;
    slugItem: string;
    currentProjectCases: string[];
    projectData: ProjectData[];
    fileData: Data[];
}

export default function TopNav({ slug, slugItem, projectData, currentProjectCases, fileData }: PageProps) {
    const router = useRouter();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 140) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const renderTabs = () => {
        return currentProjectCases.map((caseItem: string) => {
            const formattedCaseItem = caseItem
                .replace(/-/g, ' ')
                .replace(/^./, (char) => char.toUpperCase());
            return (
                <MiniButton text={formattedCaseItem} key={caseItem} onClick={() => router.push(`/projects/${slug}/${caseItem}`)} isCurrent={slugItem === caseItem} />
            );
        });
    };

    return (
        <div className={`w-full pt-[120px] px-5 pb-4 md:px-[48px] lg:px-[120px] bg-background space-y-2 ${isSticky ? 'sticky top-[-140px]' : ''}`}>
            <p className={`text-base font-semibold text-primary ${isSticky ? 'opacity-0' : ''}`}>{projectData[0].name}</p>
            <div className="relative">
                <p className={`hidden xl:block w-full text-sm text-tertiary absolute text-center pt-1 ${isSticky ? 'opacity-100' : 'opacity-0'}`}><span className="font-semibold pr-1">Olly Watson</span>  /  <span className="font-semibold text-primary pl-1">{projectData[0].name}</span></p>
                <div className="flex justify-between">
                    <div className='flex items-end space-x-1 overflow-x-auto'>
                        <BackButton />
                        {renderTabs()}
                    </div>
                    <div className="hidden md:block">
                        <MiniButton text={projectData[0].linkname} icon="arrow" link={projectData[0].link} />
                    </div>
                </div>
            </div>
        </div>
    )
}
