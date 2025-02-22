'use client';

import React from 'react';

interface FooterProps {
  isFullWidth?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFullWidth = false }) => {
    return (
        <div className="w-full bg-background mt-[78px]">
            <div className={`flex items-center space-x-[13px] ${isFullWidth ? 'px-6 md:px-[48px] lg:px-[120px]' : 'max-w-[600px]'} z-10 mx-auto pb-[120px] p-[26px]`}>
                <p className="text-tertiary text-sm">© 2025 Olly Watson</p>
            </div>
        </div>
    );
};

export default Footer;