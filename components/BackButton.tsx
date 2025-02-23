import React from 'react';
import AnimatedIconWrapper2 from './animatediconwrapper2';
import ArrowLeftCircle from './ArrowLeftCircle';
import Link from 'next/link';
import Image from 'next/image';


const BackButton = () => {
    return (
        <Link href='/' >
            <button className='button-container p-[7px] relative rounded-full transition-colors mr-2 duration-200 bg-selectorBg hover:bg-buttonBg'>
                <div className="w-[18px] h-[18px] relative">
                    <AnimatedIconWrapper2 direction="left">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 9.06415L2.5 9.06415M2.5 9.06415L6.55 13.0502M2.5 9.06415L6.55 4.9502" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </AnimatedIconWrapper2>
                </div>
            </button>
        </Link>
    );
}

export default BackButton;