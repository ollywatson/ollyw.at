import React from 'react';
import AnimatedIconWrapper from './animatediconwrapper';

interface MiniButtonProps {
  text: string;
  icon: string;
}

const MiniButton: React.FC<MiniButtonProps> = ({ text, icon }) => {
    return (
        <button className="button-container flex items-center justify-center px-[16px] py-1 bg-selectorBg hover:bg-buttonBg rounded-full text-primary relative overflow-hidden transition-colors duration-200">
            <span className="text-sm">{text}</span>
            <div className="w-[18px] h-[18px] relative ml-[6px]">
                <AnimatedIconWrapper direction="top-right">
                    {icon === 'arrow' ? (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13L14 4M14 4L6.92857 4M14 4V11.0714" stroke="white" strokeWidth="1.25" strokeLinecap="square"/>
                        </svg>
                    ) : (
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.16352 9.11836L10.7091 15.4823L15.4821 1.7998L1.79956 6.57278L8.16352 9.11836ZM8.16352 9.11836L9.99316 7.28872L10.908 6.3739" stroke="white" strokeWidth="1.25" strokeLinejoin="bevel"/>
                        </svg>
                    )}
                </AnimatedIconWrapper>
            </div>
        </button>
    );
}

export default MiniButton;