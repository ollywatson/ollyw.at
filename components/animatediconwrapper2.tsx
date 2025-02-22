import React, { ReactNode } from 'react';

interface AnimatedIconWrapperProps {
    children: ReactNode;
    direction?: 'left' | 'right' | 'up' | 'down' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const AnimatedIconWrapper2: React.FC<AnimatedIconWrapperProps> = ({ children, direction }) => {
    const animationKeyframes2 = `
        @keyframes icon-move2 {
            0% {
                transform: translate(0, 0);
                opacity: 1;
            }
            50% {
                transform: ${direction === 'left' ? 'translate(-50%, 0)' : direction === 'right' ? 'translate(50%, 0)' : direction === 'up' ? 'translate(0, -50%)' : direction === 'down' ? 'translate(0, 50%)' : direction === 'top-left' ? 'translate(-70%, -70%)' : direction === 'top-right' ? 'translate(70%, -70%)' : direction === 'bottom-left' ? 'translate(-70%, 70%)' : direction === 'bottom-right' ? 'translate(70%, 70%)' : 'translate(70%, -70%)'};
                opacity: 0;
            }
            50.1% {
                transform: ${direction === 'left' ? 'translate(50%, 0)' : direction === 'right' ? 'translate(-50%, 0)' : direction === 'up' ? 'translate(0, 50%)' : direction === 'down' ? 'translate(0, -50%)' : direction === 'top-left' ? 'translate(70%, 70%)' : direction === 'top-right' ? 'translate(-70%, 70%)' : direction === 'bottom-left' ? 'translate(70%, -70%)' : direction === 'bottom-right' ? 'translate(-70%, -70%)' : 'translate(-70%, 70%)'};
                opacity: 0;
            }
            100% {
                transform: translate(0, 0);
                opacity: 1;
            }
        }
        .button-container:hover .animated-icon2 {
            animation: icon-move2 0.35s cubic-bezier(0.25, 1.5, 0.64, 1) forwards;
        }
        .animated-icon2 {
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
                {animationKeyframes2}
            </style>
            <div className="animated-icon2">
                {children}
            </div>
        </>
    );
};

export default AnimatedIconWrapper2;