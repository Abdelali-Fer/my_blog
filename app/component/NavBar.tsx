import Link from 'next/link'
import React from 'react'

function NavBar() {

    return (
        <div className='w-full h-[80px] bg-[#232536]'>
            <div className='flex justify-between items-center h-full w-full px-4'>
            <div>
                <Link href={'/'}>
                    <h2 className='text-[#fff] font-semibold tracking-widest text-2xl leading-none'>Finsweet</h2>
                </Link>
            </div>
            <div className='flex items-center mr-9'>
                <ul className='hidden sm:flex'>
                    <Link href={'/'}>
                        <li className='ml-10  text-[#fff]'>Home</li>
                    </Link>
                    <Link href={'/blog'}>
                        <li className='ml-10  text-[#fff]'>Blog</li>
                    </Link>
                    <Link href={'/about'}>
                        <li className='ml-10  text-[#fff]'>About Us</li>
                    </Link>
                    <Link href={'/contact'}>
                        <li className='mx-10  text-[#fff]'>Contact Us</li>
                    </Link>
                </ul>
                <Link href={'/'}>
                    <button className='pl-4 pr-4 pt-2 pb-2  text-black bg-white mr-3'>Subscribe</button>
                </Link>
            </div>
            </div>
            
        </div>
    )
}

export default NavBar