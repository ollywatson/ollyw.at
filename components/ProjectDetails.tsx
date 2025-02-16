'use client';

import React, { useState } from 'react'
import Image from 'next/image';

import Link from 'next/link';
import AnimatedIconWrapper from './animatediconwrapper';


interface DataProps {
    pageData: {
        multiBasket: any;
        deliveroPlus: any;
        basketQuickView: any;
    };
}

export default function ProjectDetailsTabs({ pageData }: DataProps) {
    const [activeTab, setActiveTab] = useState<'multiBasket' | 'deliveroPlus' | 'basketQuickView'>('multiBasket');

    // Get the data for the active tab
    const activeData = pageData[activeTab];

    const videoRegex = /\.(mp4|mov|webm|avi|mkv)$/i;

    return (
        <>
            {/* Sidebar & Tabs */}
            <div className='fixed top-0 left-0 w-1/4 min-h-screen pt-[62px] px-[52px] border-r border-[#ECF2F9] bg-white'>
                <div className=''>
                    <Link href='/' >
                        <button className='button-container p-[10px] relative rounded-full border-2 transition-colors duration-200 border-[#ECF2F9] hover:bg-[#ECF2F9]'>
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
                        <h4 className='text-[16px] font-bold text-[#2E3741]'>Deliveroo</h4>
                        <p className='mt-3'>Staff Product Designer</p>
                        <p>{`2021 – present`}</p>
                    </div>
                </div>

                <div className='flex flex-col items-start'>
                    <button
                        className={`flex items-center justify-between relative w-full h-[62px] border-b text-left z-20 ${activeTab === 'multiBasket' ? 'after:rounded-2xl  border-transparent  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full after:top-0 after:left-[-20px] after:transition-all' : ' border-[#ECF2F9]'}`}
                        onClick={() => setActiveTab('multiBasket')}
                    >
                        Multi-basket
                        <span className='text-[#2E3741]'>2024</span>
                    </button>
                    <button
                        className={`flex items-center justify-between relative w-full h-[62px] border-b text-left z-20 ${activeTab === 'deliveroPlus' ? 'after:rounded-2xl  border-transparent  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full  after:top-0 after:left-[-20px] after:transition-all' : ' border-[#ECF2F9]'}`}
                        onClick={() => setActiveTab('deliveroPlus')}
                    >
                        Deliveroo Plus
                        <span className='text-[#2E3741]'>2023</span>
                    </button>
                    <button
                        className={`flex items-center justify-between relative w-full h-[62px] text-left z-20 ${activeTab === 'basketQuickView' ? 'after:rounded-2xl  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full  after:top-0 after:left-[-20px] after:transition-all' : ''}`}
                        onClick={() => setActiveTab('basketQuickView')}
                    >
                        Basket Quick View
                        <span className='text-[#2E3741]'>2022</span>
                    </button>
                </div>
            </div>
            {/* Page Data  */}
            <div className='w-full md:w-3/4 md:mt-12 ml-auto'>
                <div className='w-1/2 mx-auto text-[16px] text-primary'>
                    <div className='pb-12'>
                        {activeData.description1 ? <p>{activeData.description1}</p> : null}
                        {
                            activeData.imgTitle1 && videoRegex.test(activeData.imgTitle1) ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className='w-1/2 h-auto mt-8 mb-2  mx-auto rounded-3xl border-2 border-'
                                >
                                    <source src={`/${activeData.imgTitle1}`} type={`video/${activeData.imgTitle1.split('.').pop()}`} />
                                    Your browser does not support the video tag.
                                </video>
                            ) : <Image
                                src={`/${activeData.imgTitle1}`}
                                width={100}
                                height={600}
                                className='mt-8 mb-2 mx-auto w-1/2'
                                alt='Project Image'
                                unoptimized={true}
                            />
                        }
                        {/* {activeData.imgTitle1 ? <Image
                            src={`/${activeData.imgTitle1}`}
                            width={100}
                            height={600}
                            className='mt-8 mb-2 mx-auto w-1/2'
                            alt='Project Image'
                            unoptimized={true}
                        /> : null} */}
                        {activeData.imgCaption1 ? <h6 className='text-sm text-center'>{activeData.imgCaption1}</h6> : null}

                    </div>
                    <div className='pb-12'>
                        {activeData.heading1 ? <h4 className='pb-4 font-bold text-[#2E3741]'>{activeData.heading1}</h4> : null}
                        {activeData.description2 ? <p>{activeData.description1}</p> : null}
                    </div>
                    <div className='pb-12'>
                        {activeData.imgTitle2 ? <Image
                            src={`/${activeData.imgTitle2}`}
                            width={100}
                            height={600}
                            className='mt-8 mb-2 mx-auto w-1/2'
                            alt='Project Image'
                            unoptimized={true}
                        /> : null}
                        {activeData.imgCaption2 ? <h6 className='text-sm text-center'>{activeData.imgCaption2}</h6> : null}

                    </div>
                    <div className='pb-12'>
                        {activeData.heading2 ? <h4 className='pb-4 font-bold text-[#2E3741]'>{activeData.heading2}</h4> : null}
                        {activeData.description2 ? <p>{activeData.description2}</p> : null}
                    </div>
                </div>
            </div>
        </>
    )
}
