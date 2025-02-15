'use client';

import React, { useState } from 'react'
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
interface PageProps {
    slug: string;
    slugItem: string;
    projectData: ProjectData[]; // Array of ProjectData objects
}

export default function MobileNav({ slug, slugItem, projectData }: PageProps) {
    const [isOpen, setIsOpen] = useState(false);

    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative border-b border-[#ECF2F9] bg-white'>
            <div className='flex items-center justify-between'>
                <div className='py-6 text-[#4D555F]'>
                    <h4 className='text-[16px] font-bold text-[#2E3741]'>{projectData[0].name}</h4>
                    <div className='flex items-center gap-2'>
                        <p className=''>{projectData[0].role}</p>
                        <span className='h-1 w-1 rounded-full bg-[#4D555F] mt-px opacity-70'></span>
                        <p>{projectData[0].year}</p>
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
                className={`absolute w-full flex left-0 top-[calc(100%+20px)] rounded-3xl overflow-hidden flex-col items-start border-2 border-[#ECF2F9] bg-white transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}
            >
                <button
                    className={`flex items-center p-4 justify-between relative w-full h-[62px] text-left z-20 ${slugItem === 'multi-basket' ? 'bg-[#ECF2F9]' : ''
                        }`}
                    onClick={() => router.push(`/projects/${slug}/multi-basket`)}
                >
                    Multi-basket
                    <span className="text-[#2E3741]">2024</span>
                </button>
                <button
                    className={`flex items-center p-4 justify-between relative w-full h-[62px] border-y-2 border-[#ECF2F9] text-left z-20 ${slugItem === 'deliveroo-plus' ? 'bg-[#ECF2F9]' : ''
                        }`}
                    onClick={() => router.push(`/projects/${slug}/deliveroo-plus`)}
                >
                    Deliveroo Plus
                    <span className="text-[#2E3741]">2023</span>
                </button>
                <button
                    className={`flex items-center p-4 justify-between relative w-full h-[62px] text-left z-20 ${slugItem === 'basket-quick-view' ? 'bg-[#ECF2F9]' : ''
                        }`}
                    onClick={() => router.push(`/projects/${slug}/basket-quick-view`)}
                >
                    Basket Quick View
                    <span className="text-[#2E3741]">2022</span>
                </button>
            </div>
        </div>
    )
}
