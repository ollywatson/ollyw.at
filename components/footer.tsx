import React from 'react';
// import ProfileIcon from './profileicon';

const Footer = () => {
    return (
        <div className="w-full bg-background mt-[78px] border-t border-borderLight">
            <div className="relative max-w-2xl z-10 mx-auto pb-[120px] p-[26px]">
                {/* <ProfileIcon color="#8290A1" /> */}
                <p className="text-tertiary text-sm md:text-sm-md">© 2025 Olly Watson</p>
            </div>
        </div>
    );
};

export default Footer;