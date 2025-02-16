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
                    className={`flex items-center justify-between relative w-full h-[62px] border-b text-left text-sm md:text-sm-md font-bold z-20 ${slugItem === caseItem ? 'after:rounded-2xl  border-transparent  after:absolute after:w-[calc(100%+40px)] after:bg-selectorBg  after:-z-10 after:h-full after:top-0 after:left-[-20px] after:transition-all' : ' border-borderLight'}`}
                    onClick={() => router.push(`/projects/${slug}/${caseItem}`)}
                >
                    {formattedCaseItem}
                </button>
            );
        });
    };


    return (
        <div className='fixed top-0 left-0 lg:w-1/4 md:w-2/5 min-h-screen pt-[62px] px-[52px] border-r border-borderLight bg-background'>
            <div className=''>
                <Link href='/' >
                    <button className='button-container p-[10px] relative rounded-full border-2 transition-colors duration-200 border-borderLight hover:bg-selectorBg hover:border-selectorBg'>
                        <div className="w-5 h-5 relative">
                            <AnimatedIconWrapper direction="left">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.92874 10.0795C1.9265 9.79534 2.03725 9.52192 2.23661 9.3194L6.73662 4.74834C7.15175 4.32666 7.83012 4.32135 8.2518 4.73648C8.67348 5.15161 8.6788 5.82998 8.26367 6.25166L5.55841 8.99963L17.0001 8.99964C17.5919 8.99964 18.0716 9.47933 18.0716 10.0711C18.0716 10.6628 17.5919 11.1425 17.0001 11.1425L5.61619 11.1425L8.2517 13.7364C8.67344 14.1515 8.67884 14.8298 8.26376 15.2516C7.84869 15.6733 7.17032 15.6787 6.74858 15.2636L2.24858 10.8347C2.04604 10.6353 1.93099 10.3637 1.92874 10.0795Z"  className="fill-current"/>
                                </svg>
                            </AnimatedIconWrapper>
                        </div>
                    </button>
                </Link>

                {/* <BackButton /> */}
                <div className='mt-6 mb-16 text-[#4D555F]'>
                    <h4 className='text-base md:text-base-md font-bold text-primary'>{projectData[0].name}</h4>
                    <p className='mt-3 text-sm md:text-sm-md text-secondary'>{projectData[0].role}</p>
                    <p className='text-sm md:text-sm-md text-secondary'>{projectData[0].year}</p>
                </div>
            </div>

            <div className='flex flex-col items-start'>
                {renderTabs()}
            </div>
        </div>
    )
}
