import React, { FC } from 'react';

interface ArrowLeftCircleProps {
    color: string; // Define the type for the color prop
}

const ArrowLeftCircle: FC<ArrowLeftCircleProps> = ({ color }) => {
    return (
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0002 6.07106L2.00024 6.07106M2.00024 6.07106L6.50024 10.5M2.00024 6.07106L6.50024 1.5" stroke={color} strokeWidth="2.14286" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default ArrowLeftCircle;