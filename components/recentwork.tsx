import React from 'react';
import ProjectBox from './projectbox';

const RecentWorkSection = () => {
    return (
        <div className="mt-20 px-[6px]">
            <p className="text-base text-primary font-semibold px-[20px]">Work</p>
            <ProjectBox />
        </div>
    );
};

export default RecentWorkSection;