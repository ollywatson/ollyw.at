'use client';

import React from 'react'
// import ArrowLeftCircle from './ArrowLeftCircle';
// import BackButton from './BackButton';
import AnimatedIconWrapper from './animatediconwrapper';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


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

export default function Sidebar({ slug, slugItem, projectData, currentProjectCases, fileData }: PageProps) {
    const router = useRouter();
    console.log(currentProjectCases)

    const renderTabs = () => {
        return currentProjectCases.map((caseItem: string) => {
            // Perform string modifications
            const formattedCaseItem = caseItem
                .replace(/-/g, ' ') // Replace hyphens with spaces
                .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word

            return (
                <button
                    key={caseItem}
                    className={`flex items-center justify-between relative w-full h-[62px] border-b text-left z-20 ${slugItem === caseItem ? 'after:rounded-2xl  border-transparent  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full after:top-0 after:left-[-20px] after:transition-all' : ' border-[#ECF2F9]'}`}
                    onClick={() => router.push(`/projects/${slug}/${caseItem}`)}
                >
                    {formattedCaseItem}
                </button>
            );
        });
    };


    return (
        <div className='fixed top-0 left-0 lg:w-1/4 md:w-2/5 min-h-screen pt-[62px] px-[52px] border-r border-[#ECF2F9] bg-white'>
            <div className=''>
                <Link href='/' >
                    <button className='button-container relative h-11 w-11 rounded-full flex items-center justify-center border transition-all delay-300 border-[#ECF2F9] hover:bg-[#ECF2F9]'>
                        <AnimatedIconWrapper>
                            <svg className='mt-[15px] ml-3' width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.0002 6.07106L2.00024 6.07106M2.00024 6.07106L6.50024 10.5M2.00024 6.07106L6.50024 1.5" stroke='#2E3741' strokeWidth="2.14286" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </AnimatedIconWrapper>
                    </button>
                </Link>

                {/* <BackButton /> */}
                <div className='mt-6 mb-16 text-[#4D555F]'>
                    <h4 className='text-[16px] font-bold text-[#2E3741]'>{projectData[0].name}</h4>
                    <p className='mt-3'>{projectData[0].role}</p>
                    <p>{projectData[0].year}</p>
                </div>
            </div>

            <div className='flex flex-col items-start'>
                {renderTabs()}
            </div>
        </div>
    )
}
