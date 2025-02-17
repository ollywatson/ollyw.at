import React, { ReactNode } from 'react';

interface AnimatedIconWrapperProps {
    children: ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const AnimatedIconWrapper: React.FC<AnimatedIconWrapperProps> = ({ children, direction }) => {
    const animationKeyframes = `
        @keyframes icon-move {
            0% {
                transform: translate(0, 0);
                opacity: 1;
            }
            50% {
                transform: ${direction === 'left' ? 'translate(-50%, 0)' : direction === 'right' ? 'translate(50%, 0)' : direction === 'up' ? 'translate(0, -50%)' : direction === 'down' ? 'translate(0, 50%)' : direction === 'top-left' ? 'translate(-75%, -75%)' : direction === 'top-right' ? 'translate(75%, -75%)' : direction === 'bottom-left' ? 'translate(-75%, 75%)' : direction === 'bottom-right' ? 'translate(75%, 75%)' : 'translate(75%, -75%)'};
                opacity: 0;
            }
            50.1% {
                transform: ${direction === 'left' ? 'translate(50%, 0)' : direction === 'right' ? 'translate(-50%, 0)' : direction === 'up' ? 'translate(0, 50%)' : direction === 'down' ? 'translate(0, -50%)' : direction === 'top-left' ? 'translate(75%, 75%)' : direction === 'top-right' ? 'translate(-75%, 75%)' : direction === 'bottom-left' ? 'translate(75%, -75%)' : direction === 'bottom-right' ? 'translate(-75%, -75%)' : 'translate(-75%, 75%)'};
                opacity: 0;
            }
            100% {
                transform: translate(0, 0);
                opacity: 1;
            }
        }
        .button-container:hover .animated-icon {
            animation: icon-move 0.3s cubic-bezier(0.25, 1.5, 0.64, 1) forwards;
        }
        .animated-icon {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: translate(0, 0);
            opacity: 1;
        }
    `;
    return (
        <>
            <style>
                {animationKeyframes}
            </style>
            <div className="animated-icon">
                {children}
            </div>
        </>
    );
};

export default AnimatedIconWrapper;