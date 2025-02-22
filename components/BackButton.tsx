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
                        <Image src="/arrow-back-mini.svg" alt="Arrow Up" width={18} height={18} />
                    </AnimatedIconWrapper2>
                </div>
            </button>
        </Link>
    );
}

export default BackButton;