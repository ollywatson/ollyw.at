'use client';

import React from 'react'
// import ArrowLeftCircle from './ArrowLeftCircle';
// import BackButton from './BackButton';
import AnimatedIconWrapper from './animatediconwrapper';
import Link from 'next/link';
import { useRouter } from 'next/navigation'


export default function Sidebar({slug, slugItem}) {
    const router = useRouter();
    // console.log(slug);
    return (
        <div className='fixed top-0 left-0 w-1/4 min-h-screen pt-[62px] px-[52px] border-r border-[#ECF2F9] bg-white'>
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
                    <h4 className='text-[16px] font-bold text-[#2E3741]'>Deliveroo</h4>
                    <p className='mt-3'>Staff Product Designer</p>
                    <p>{`2021 – present`}</p>
                </div>
            </div>

            <div className='flex flex-col items-start'>
                <button
                    className={`flex items-center justify-between relative w-full h-[62px] border-b text-left z-20 ${slugItem === 'multi-basket' ? 'after:rounded-2xl  border-transparent  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full after:top-0 after:left-[-20px] after:transition-all' : ' border-[#ECF2F9]'}`}
                    // onClick={() => setActiveTab('multi-basket')}
                    onClick={() => router.push(`/projects/${slug}/multi-basket`)}
                >
                    Multi-basket
                    <span className='text-[#2E3741]'>2024</span>
                </button>
                <button
                    className={`flex items-center justify-between relative w-full h-[62px] border-b text-left z-20 ${slugItem === 'deliveroo-plus' ? 'after:rounded-2xl  border-transparent  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full  after:top-0 after:left-[-20px] after:transition-all' : ' border-[#ECF2F9]'}`}
                    // onClick={() => setActiveTab('deliveroo-plus')}
                    onClick={() => router.push(`/projects/${slug}/deliveroo-plus`)}
                >
                    Deliveroo Plus
                    <span className='text-[#2E3741]'>2023</span>
                </button>
                <button
                    className={`flex items-center justify-between relative w-full h-[62px] text-left z-20 ${slugItem === 'basket-quick-view' ? 'after:rounded-2xl  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full  after:top-0 after:left-[-20px] after:transition-all' : ''}`}
                    // onClick={() => setActiveTab('basket-quick-view')}
                    onClick={() => router.push(`/projects/${slug}/basket-quick-view`)}

                >
                    Basket Quick View
                    <span className='text-[#2E3741]'>2022</span>
                </button>
            </div>
        </div>
    )
}
