import React from 'react';
import EmailButton from './emailbutton';
import ProfileIcon from './profileicon';
import GlowIcon from './glowicon';

const Profile = () => {
    return (
        <div className="px-[26px]">
            <div className="flex items-center space-x-3 py-[6px]">
                <GlowIcon />
                <p className="text-sm md:text-sm-md font-bold">Olly Watson</p>
            </div>

            <div className="mt-[43px]">
                <p className="text-base md:text-base-md text-secondary">I’m a product designer based in London, UK.</p>
            </div>
            <div className="mt-[26px]">
                <p className="text-base md:text-base-md text-secondary">I currently work in the consumer team at <span className="font-bold text-primary">Deliveroo</span>. I also designed and built <span className="font-bold text-primary">Voicey</span>, a voice-first messaging app, available on iOS.</p>
            </div>
            <div className="mt-[44px]">
                <EmailButton />
            </div>
        </div>
    );
};

export default Profile;