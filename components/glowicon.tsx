import React, { ReactNode } from 'react';

const GlowIcon = () => {
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
                    --card-height: 30px;
                    --card-width: 30px;
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
                    font-size: 1.5em;
                    color: rgb(88 199 250 / 0%);
                    cursor: pointer;
                    font-family: cursive;
                    }

                    .card:hover {
                    color: rgb(88 199 250 / 100%);
                    transition: color 1s;
                    background: white;
                    }
                    .card:hover:before, .card:hover:after {
                    animation: none;
                    filter: blur(0);
                    background-image: linear-gradient(
                        var(--rotate)
                        ,white, white);
                        opacity: 1;
                    }


                    .card::before {
                    content: "";
                    width: 34px;
                    height: 34px;
                    border-radius: 30px;
                    background-image: linear-gradient(
                        var(--rotate)
                        , #5ddcff, #3c67e3 43%, #4e00c2);
                        position: absolute;
                        z-index: -1;
                        animation: spin 3.5s linear infinite;
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
                    -webkit-backface-visibility: hidden;
                    -moz-backface-visibility: hidden;
                    will-change: transform;
                    transform: translate3d(0, 0, 0);
                    overflow: visible;
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
            <div className="glow-icon card bg-background overflow-visible">
                <div className="text-primary hover:text-background transition-colors duration-200 rounded-full overflow-visible">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6126 19.4241C16.556 21.399 13.321 21.3675 11.3873 19.3536" className="stroke-current" strokeWidth="2" strokeLinecap="round"/>
                        <path d="M14.2966 7.62549C14.5382 6.97252 15.4618 6.97253 15.7034 7.62549L16.5009 9.78063C16.5768 9.98592 16.7387 10.1478 16.944 10.2237L19.0991 11.0212C19.7521 11.2628 19.7521 12.1864 19.0991 12.428L16.944 13.2255C16.7387 13.3014 16.5768 13.4633 16.5009 13.6686L15.7034 15.8237C15.4618 16.4767 14.5382 16.4767 14.2966 15.8237L13.4991 13.6686C13.4232 13.4633 13.2613 13.3014 13.056 13.2255L10.9009 12.428C10.2479 12.1864 10.2479 11.2628 10.9009 11.0212L13.056 10.2237C13.2613 10.1478 13.4232 9.98592 13.4991 9.78063L14.2966 7.62549Z" className="fill-current"/>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default GlowIcon;