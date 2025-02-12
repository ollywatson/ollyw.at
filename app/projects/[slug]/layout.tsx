import Sidebar from '@/components/Sidebar';
import React from 'react'

const Layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className='relative z-30 flex'>
            <Sidebar />
            <div>{children}</div>
        </div>
    )
}

export default Layout
