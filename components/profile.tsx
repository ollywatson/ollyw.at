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
        <div className="px-5">
            <div className="space-y-0">
                {/* <p className="pr-8 text-headline md:text-headline-md font-serif text-secondary"><span className="text-primary">Olly Watson</span> is a product designer from the UK, currently working at <Link href="https://www.deliveroo.design/" className="inline-link text-primary">Deliveroo</ Link>.</p> */}
                {/* <p className="pr-8 text-base text-secondary"><span className="text-primary">Olly Watson</span> is a product designer from the UK, currently working at <Link href="https://www.deliveroo.design/" className="inline-link text-primary">Deliveroo</ Link>.</p> */}
                <p className="text-base font-semibold text-primary">Olly Watson</p>
                <p className="text-serif-adjust font-serif italic text-tertiary">Product designer from London, UK</p>
            </div>
            <div className="mt-8">
                <p className="text-base text-secondary">Over the past 13 years, I’ve worked in consulting, agencies, big tech and startups, at many stages of the product development life cycle – from ethnographic research to brand to design engineering. I get joy from both big picture thinking and being in the weeds with the fine details.</p>
                <p className="text-base text-secondary mt-6">I’m interested in how digital products shape how people communicate and interact, and built an iPhone app called <Link href="https://www.deliveroo.design/" className="inline-link text-primary">Voicey</Link> to explore more natural and intuitive ways to communicate via voice.</p>
            </div>
            <div className="mt-8 flex space-x-[6px]">
                <MiniButton text="Email" icon="plane" mailto="oliverwcwatson@gmail.com" />
                <MiniButton text="LinkedIn" icon="arrow" link="https://www.linkedin.com/in/olly-watson-9a587238/" />
                <MiniButton text="Github" icon="arrow" link="https://github.com/ollywatson" />
            </div>
        </div>
    );
};

export default Profile;