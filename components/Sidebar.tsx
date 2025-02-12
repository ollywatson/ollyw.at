'use client';

import React, { FC, useState } from 'react'
import ArrowLeftCircle from './ArrowLeftCircle';

const Sidebar: FC = () => {
    const [activeTab, setActiveTab] = useState('multi-basket');

    return (
        <div className='w-1/4 min-h-screen pt-[62px] px-[52px] border-r border-[#ECF2F9] bg-white'>
            <div className=''>
                <button className='h-11 w-11 rounded-full flex items-center justify-center border border-[#ECF2F9]'>
                    <ArrowLeftCircle color='#2E3741' />
                </button>
                <div className='mt-6 mb-16 text-[#4D555F]'>
                    <h4 className='text-[16px] font-bold text-[#2E3741]'>Deliveroo</h4>
                    <p className='mt-3'>Staff Product Designer</p>
                    <p>{`2021 – present`}</p>
                </div>
            </div>

            <div className='flex flex-col items-start'>
                <button
                    className={`flex items-center justify-between relative w-full h-[62px] border-b text-left z-20 ${activeTab === 'multi-basket' ? 'after:rounded-2xl  border-transparent  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full after:top-0 after:left-[-20px] after:transition-all' : ' border-[#ECF2F9]'}`}
                    onClick={() => setActiveTab('multi-basket')}
                >
                    Multi-basket
                    <span className='text-[#2E3741]'>2024</span>
                </button>
                <button
                    className={`flex items-center justify-between relative w-full h-[62px] border-b text-left z-20 ${activeTab === 'deliveroo-plus' ? 'after:rounded-2xl  border-transparent  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full  after:top-0 after:left-[-20px] after:transition-all' : ' border-[#ECF2F9]'}`}
                    onClick={() => setActiveTab('deliveroo-plus')}
                >
                    Deliveroo Plus
                    <span className='text-[#2E3741]'>2023</span>
                </button>
                <button
                    className={`flex items-center justify-between relative w-full h-[62px] text-left z-20 ${activeTab === 'basket-quick-view' ? 'after:rounded-2xl  after:absolute after:w-[calc(100%+40px)] after:bg-[#ECF2F9]  after:-z-10 after:h-full  after:top-0 after:left-[-20px] after:transition-all' : ''}`}
                    onClick={() => setActiveTab('basket-quick-view')}
                >
                    Basket Quick View
                    <span className='text-[#2E3741]'>2022</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar;
