import React from 'react';
import Link from 'next/link';
import EmailButton from './emailbutton';
import ProfileIcon from './profileicon';
import GlowIcon from './glowicon';
import GlowSquare from './glowsquare';
import FeatureIcon from './featureicon';
import MiniButton from './minibutton';

const Profile = () => {
    return (
        <div className="px-[26px]">
            <div className="space-y-[39px]">
                <FeatureIcon />
                {/* <GlowIcon /> */}
                <p className="pr-8 text-headline font-serif text-secondary"><span className="text-primary">Olly Watson</span> is a product designer from the UK, currently working at <Link href="https://www.deliveroo.design/" className="inline-link text-primary">Deliveroo</ Link></p>
            </div>
            <div className="mt-8">
                <p className="text-base text-secondary">Over the past decade, I’ve worked at many stages of the product development life cycle, from ethnographic research to design engineering. I designed and built <Link href="https://www.deliveroo.design/" className="inline-link text-primary">Voicey</Link>, an iPhone app for voice messaging.</p>
            </div>
            <div className="mt-6 flex space-x-[6px]">
                <MiniButton text="Email" icon="plane" />
                <MiniButton text="LinkedIn" icon="arrow" />
                <MiniButton text="Github" icon="arrow" />
            </div>
        </div>
    );
};

export default Profile;