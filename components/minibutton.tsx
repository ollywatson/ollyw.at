import React from 'react';
import AnimatedIconWrapper from './animatediconwrapper';
import Image from 'next/image';

interface MiniButtonProps {
  text?: string;
  icon?: string;
  link?: string;
  mailto?: string;
  onClick?: () => void;
  isCurrent?: boolean;
}

const MiniButton: React.FC<MiniButtonProps> = ({ text, icon, link, mailto, onClick, isCurrent }) => {
    const buttonContent = (
        <>
            <span className="text-sm">{text}</span>
            {icon && (
                <div className="w-[18px] h-[18px] relative ml-[6px]">
                    <AnimatedIconWrapper direction="top-right">
                        {icon === 'arrow' ? (
                            <Image src="/arrow-up-mini.svg" alt="Arrow Up" width={18} height={18} />
                        ) : (
                            <Image src="/paper-plane-mini.svg" alt="Arrow Up" width={18} height={18} />
                        )}
                    </AnimatedIconWrapper>
                </div>
            )}
        </>
    );

    if (link) {
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" className="button-container flex items-center justify-center px-4 pt-1 pb-[6px] bg-selectorBg hover:bg-buttonBg rounded-full text-primary relative overflow-hidden transition-colors duration-200">
                {buttonContent}
            </a>
        );
    } else if (mailto) {
        return (
            <a href={`mailto:${mailto}`} className="button-container flex items-center justify-center px-4 pt-1 pb-[6px] bg-selectorBg hover:bg-buttonBg rounded-full text-primary relative overflow-hidden transition-colors duration-200">
                {buttonContent}
            </a>
        );
    } else if (onClick) {
        return (
            <button onClick={onClick} className={`button-container flex items-center justify-center px-4 pt-1 pb-[6px] ${isCurrent ? 'bg-buttonBg hover:bg-buttonBg' : 'bg-selectorBg hover:bg-buttonBg'} rounded-full text-primary relative overflow-hidden transition-colors duration-200`}>
                {buttonContent}
            </button>
        );
    } else {
        return (
            <button className="button-container flex items-center justify-center px-6 pt-1 pb-[6px] bg-selectorBg hover:bg-buttonBg rounded-full text-primary relative overflow-hidden transition-colors duration-200">
                {buttonContent}
            </button>
        );
    }
}

export default MiniButton;