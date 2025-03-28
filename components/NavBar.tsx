'use client';
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function NavBar() {

    const pathname = usePathname()

    return (
        <nav className='w-full h-[80px] bg-[#232536]'>
            <div className='flex justify-between items-center h-full w-full px-16'>
            <div>
                <Link href={'/'}>
                    <h2 className='text-[#fff] font-semibold tracking-widest text-2xl leading-none'>Finsweet</h2>
                </Link>
            </div>
            <div className='flex items-center'>
                <ul className='hidden sm:flex'>
                    {
                        [
                            { name: "Home", path: "/" },
                            { name: "Blog", path: "/blog" },
                            { name: "About Us", path: "/about" },
                            { name: "Contact Us", path: "/contact" },
                        ].map((link)=>(
                            <li key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`ml-10 ${pathname === link.path ? "text-gray-400" : "text-white"}`}
                                    >
                                    {link.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <Link href={'/'} className='ml-3'>
                    <button className='pl-4 pr-4 pt-2 pb-2  text-black bg-white'>Subscribe</button>
                </Link>
            </div>
            </div>
            
        </nav>
    )
}

export default NavBar