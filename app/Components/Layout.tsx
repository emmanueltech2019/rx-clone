import React from 'react'
import SideBar from './SideBar'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <SideBar />
            <div className='md:pl-[100px] pt-[80px] '>
                {children}
            </div>
        </div>
    )
}
