import React, { ReactNode } from 'react';

interface AnimatedIconWrapperProps {
    children: ReactNode;
}

const AnimatedIconWrapper: React.FC<AnimatedIconWrapperProps> = ({ children }) => {
    return (
        <>
            <style>
                {`
                    @keyframes icon-move {
                        0% {
                            transform: translate(0, 0);
                            opacity: 1;
                        }
                        50% {
                            transform: translate(75%, -75%);
                            opacity: 0;
                        }
                        50.1% {
                            transform: translate(-75%, 75%);
                            opacity: 0;
                        }
                        100% {
                            transform: translate(0, 0);
                            opacity: 1;
                        }
                    }
                    .button-container:hover .animated-icon {
                        animation: icon-move 0.4s cubic-bezier(0.25, 1.5, 0.64, 1) forwards;
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
                `}
            </style>
            <div className="animated-icon">
                {children}
            </div>
        </>
    );
};

export default AnimatedIconWrapper;