import React from 'react';
import AnimatedIconWrapper from './animatediconwrapper';
import ArrowLeftCircle from './ArrowLeftCircle';


const BackButton = () => {
    return (
        // <button className="button-container flex items-center justify-center pl-[20px] pr-[26px] pt-[9px] pb-[11px] bg-white hover:bg-buttonBg hover:border-buttonBg border-2 border-borderLight rounded-full text-primary relative overflow-hidden transition-colors duration-200">
        //     <div className="w-5 h-5 relative mr-2">
        //         <AnimatedIconWrapper>
        //             <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                 <path fillRule="evenodd" clipRule="evenodd" d="M17.9099 2.29292C18.1813 2.56429 18.2734 2.96703 18.147 3.3294L12.8437 18.5322C12.7063 18.926 12.3389 19.1932 11.9219 19.2026C11.5049 19.2119 11.1259 18.9615 10.971 18.5742L8.30176 11.9011L1.62861 9.23181C1.24134 9.0769 0.990897 8.69789 1.00025 8.2809C1.00961 7.8639 1.2768 7.49651 1.67063 7.35913L16.8734 2.05583C17.2358 1.92942 17.6385 2.02155 17.9099 2.29292ZM10.2444 11.3726L11.8355 15.3502L14.8187 6.79833L10.2444 11.3726ZM13.4045 5.38411L4.8526 8.36733L8.83023 9.95839L13.4045 5.38411Z" className="fill-current"/>
        //             </svg>
        //         </AnimatedIconWrapper>
        //     </div>
        //     <span className="text-sm md:text-sm-md font-bold">Contact</span>
        // </button>
        <button className='h-11 w-11 rounded-full flex items-center justify-center border border-[#ECF2F9]'>
            <AnimatedIconWrapper>
                <ArrowLeftCircle color='#2E3741' />
            </AnimatedIconWrapper>
        </button>
    );
}

export default BackButton;