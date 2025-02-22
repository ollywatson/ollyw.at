'use client';

import React, { ReactNode, useState, useEffect, useRef } from 'react';
import Typed from './typed';
import HoverFact from './hoverfact';

const GlowIcon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const tooltipRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event: Event) => {
            const target = event.target as HTMLElement;
            if (!target.closest('.card-container')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick as EventListener);

        let timer: NodeJS.Timeout;

        if (isOpen) {
            timer = setTimeout(() => {
                setIsOpen(false);
            }, 10000);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick as EventListener);
            clearTimeout(timer);
        };
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            tooltipRef.current.style.transition = 'opacity 0.25s cubic-bezier(0.2, 1.5, 0.64, 1), transform 0.2s cubic-bezier(0.25, 1.5, 0.64, 1)';
            tooltipRef.current.style.opacity = '0';
            tooltipRef.current.style.transform = 'scale(0.5)';
            setTimeout(() => {
                tooltipRef.current.style.opacity = '1';
                tooltipRef.current.style.transform = 'scale(1)';
            }, 0);
        }
    }, [isOpen]);

    return (
        <>
            <style>
                {`
                    @property --rotate {
                    syntax: "<angle>";
                    initial-value: 132deg;
                    inherits: false;
                    }

                    :root {
                    --card-height: 36px;
                    --card-width: 36px;
                    }

                    .scale-svg {
                        transform: scale(1.2);
                    }

                    .card {
                    width: var(--card-width);
                    height: var(--card-height);
                    position: relative;
                    border-radius: 20px;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    display: flex;
                    cursor: pointer;
                    font-family: cursive;
                    }

                    .card-container {
                    transition: all .1s;
                    }

                    .card-container:active {
                    transform: scale(0.975);
                    }

                    .card::before {
                    position: absolute;
                    content: "";
                    left: -2;
                    top: -2;
                    z-index: -1;
                    content: "";
                    width: 40px;
                    height: 40px;
                    border-radius: 30px;
                    background: #333333;
                    transition: all .3s;
                    }

                    .isOpen .card::before {
                        transform: scale(1.05);
                        background-image: linear-gradient(
                        var(--rotate)
                        , #5ddcff, #3c67e3 43%, #4e00c2);
                        position: absolute;
                        z-index: -1;
                        animation: spin 3.5s linear infinite;
                    }

                    @media (hover: hover) and (pointer: fine) {
                        .card:hover:before {
                            transform: scale(1.05);
                            background-image: linear-gradient(
                            var(--rotate)
                            , #5ddcff, #3c67e3 43%, #4e00c2);
                            position: absolute;
                            z-index: -1;
                            animation: spin 3.5s linear infinite;
                        }
                    }   

                    .card::after {
                    position: absolute;
                    content: "";
                    left: 0;
                    right: 0;
                    z-index: -1;
                    height: 100%;
                    width: 100%;
                    margin: 0 auto;
                    transform: scale(0.8);
                    border-radius: 30px;
                    filter: blur(calc(var(--card-height) / 3));
                    background-image: linear-gradient(
                        var(--rotate)
                        , #5ddcff, #3c67e3 43%, #4e00c2);
                        opacity: 1;
                    transition: opacity .5s;
                    animation: spin 2.5s linear infinite;
                    opacity: 0;
                    }

                    .isOpen .card::after {
                        opacity: 1;
                    }
                    
                    @media (hover: hover) and (pointer: fine) {
                        .card:hover:after {
                            opacity: 1;
                        }
                    }

                    .card-container {
                        display: flex;
                        align-items: center;
                        width: 40px;
                        position: relative;
                    }

                    .tooltip {
                        border-radius: 20px 20px 20px 0;
                        pointer-events: none;
                        position: absolute;
                        left: 48px;
                        bottom: 20px;
                        transform-origin: bottom left;
                    }

                    .tooltip-cursor {
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        background-color: white;
                        animation: pulse-animation 2s infinite;
                        display: inline-block;
                        transform-origin: center;
                    }

                    @keyframes pulse-animation {
                        0% { transform: scale(1); }
                        50% { transform: scale(1.2); }
                        100% { transform: scale(1); }
                    }

                    @keyframes spin {
                    0% {
                        --rotate: 0deg;
                    }
                     100% {
                        --rotate: 360deg;
                    }
                    }
                `}
            </style>
            <div className={`relative main-container ${isOpen ? 'isOpen' : ''}`}>
                <div className="card-container rounded-full" onClick={() => setIsOpen(!isOpen)}>
                    <div className="glow-icon card bg-background px-[2px] overflow-visible relative">
                        <div className="text-primary transition-colors duration-200 rounded-full overflow-visible">
                            <svg className="scale-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.6126 19.4241C16.556 21.399 13.321 21.3675 11.3873 19.3536" className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
                                <path d="M14.2966 7.62549C14.5382 6.97252 15.4618 6.97253 15.7034 7.62549L16.5009 9.78063C16.5768 9.98592 16.7387 10.1478 16.944 10.2237L19.0991 11.0212C19.7521 11.2628 19.7521 12.1864 19.0991 12.428L16.944 13.2255C16.7387 13.3014 16.5768 13.4633 16.5009 13.6686L15.7034 15.8237C15.4618 16.4767 14.5382 16.4767 14.2966 15.8237L13.4991 13.6686C13.4232 13.4633 13.2613 13.3014 13.056 13.2255L10.9009 12.428C10.2479 12.1864 10.2479 11.2628 10.9009 11.0212L13.056 10.2237C13.2613 10.1478 13.4232 9.98592 13.4991 9.78063L14.2966 7.62549Z" className="fill-current"/>
                            </svg>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div ref={tooltipRef} className="tooltip text-sm text-medium rounded-full bg-selectorBg px-4 pt-2 pb-[10px] space-x-1 md:mr-6">
                        <span className="text-sm text-tertiary font-medium">GPT3.5 </span>
                        <span><HoverFact /></span>
                        <span className="tooltip-cursor"></span>
                    </div>
                )}
            </div>
        </>
    );
};

export default GlowIcon;