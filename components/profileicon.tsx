import React from 'react';

interface ProfileIconProps {
    color: string; // Define the type for the color prop
}

const ProfileIcon: React.FC<ProfileIconProps> = ({ color }) => {
    return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.6126 19.0786C16.556 21.0536 13.321 21.022 11.3873 19.0081" stroke={color} strokeWidth="2" strokeLinecap="round"/>
            <path d="M14.238 7.28365C14.4997 6.57627 15.5003 6.57627 15.762 7.28365L16.6259 9.61839C16.7082 9.84079 16.8836 10.0161 17.106 10.0984L19.4407 10.9624C20.1481 11.2241 20.1481 12.2246 19.4407 12.4864L17.106 13.3503C16.8836 13.4326 16.7082 13.6079 16.6259 13.8303L15.762 16.1651C15.5003 16.8725 14.4997 16.8725 14.238 16.1651L13.3741 13.8303C13.2918 13.6079 13.1164 13.4326 12.894 13.3503L10.5593 12.4864C9.85191 12.2246 9.85191 11.2241 10.5593 10.9624L12.894 10.0984C13.1164 10.0161 13.2918 9.84079 13.3741 9.61839L14.238 7.28365Z" fill={color}/>
            <circle cx="15" cy="15" r="13.75" stroke={color} strokeWidth="2.5"/>
        </svg>
    );
};

export default ProfileIcon;