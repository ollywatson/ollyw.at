import React from 'react';
import Link from 'next/link';
import EmailButton from './emailbutton';
import ProfileIcon from './profileicon';
import GlowIcon from './glowicon';
import GlowSquare from './glowsquare';
import FeatureIcon from './featureicon';

const Profile = () => {
    return (
        <div className="px-[26px]">
            <div className="space-y-[39px]">
                <FeatureIcon />
                <p className="pr-[52px] text-headline font-serif text-secondary"><span className="text-primary">Olly Watson</span> is a product designer from the UK, currently working at <Link href="https://www.deliveroo.design/" className="inline-link text-primary">Deliveroo</ Link></p>
            </div>
            <div className="mt-[26px]">
                <p className="text-base text-secondary">Over the past decade, I’ve worked at many stages of the product development life cycle, from ethnographic research to design engineering. I designed and built <Link href="https://www.deliveroo.design/" className="inline-link text-primary font-semibold">Voicey</Link>, an iPhone app for voice messaging.</p>
            </div>
            <div className="mt-[26px] pb-[8px]">
                <EmailButton />
            </div>
        </div>
    );
};

export default Profile;