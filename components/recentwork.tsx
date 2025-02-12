import React from 'react';
import ProjectBox from './projectbox';

const RecentWorkSection = () => {
    return (
        <div className="mt-[78px] px-[6px]">
            <p className="text-base md:text-base-md text-primary font-bold px-[20px]">Work</p>
            <ProjectBox />
        </div>
    );
};

export default RecentWorkSection;