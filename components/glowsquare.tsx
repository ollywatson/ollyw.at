import React, { ReactNode } from 'react';

const GlowSquare = () => {
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

                    .card-container {
                    display: inline-block;
                    animation: spin 50s linear infinite;
                    transform: rotate(var(--rotate));
                    }

                    .card {
                    width: var(--card-width);
                    height: var(--card-height);
                    position: relative;
                    justify-content: center;
                    border-radius: 20px 20px 20px 0;
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
                    opacity: 0;
                    }


                    .card::before {
                    content: "";
                    width: 110%;
                    height: 110%;
                    border-radius: 20px 20px 20px 0;
                    background-image: linear-gradient(
                        var(--rotate)
                        , #5ddcff, #3c67e3 43%, #4e00c2);
                        position: absolute;
                        z-index: -1;
                        animation: spin 2.5s linear infinite;
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
                    filter: blur(calc(var(--card-height) / 3));
                    background-image: linear-gradient(
                        var(--rotate)
                        , #5ddcff, #3c67e3 43%, #4e00c2);
                        opacity: 1;
                    transition: opacity .5s;
                    animation: spin 2.5s linear infinite;
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
            <div className="card-container">
                <div className="glow-icon card bg-background"></div>
            </div>
        </>
    );
};

export default GlowSquare;