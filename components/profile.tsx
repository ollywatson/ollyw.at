import React from 'react';
import Link from 'next/link';
import EmailButton from './emailbutton';
import ProfileIcon from './profileicon';
import GlowIcon from './glowicon';
import GlowSquare from './glowsquare';

const Profile = () => {
    return (
        <div className="pl-[26px] pr-[52px]">
            <div className="space-y-10">
                <GlowIcon />
                <p className="text-headline font-serif text-secondary"><span className="text-primary font-medium">Olly Watson</span> is a product designer from the UK, currently working at <Link href="https://www.deliveroo.design/" className="inline-link text-primary font-medium">Deliveroo</ Link></p>
            </div>
            <div className="mt-10">
                <p className="text-base md:text-base-md text-secondary">Over the past decade, I’ve worked at many stages of the product development life cycle, from ethnographic research to design engineering. I designed and built <Link href="https://www.deliveroo.design/" className="inline-link text-primary font-medium">Voicey</Link>, an iPhone app for voice messaging.</p>
            </div>
            <div className="mt-10">
                <EmailButton />
            </div>
        </div>
    );
};

export default Profile;