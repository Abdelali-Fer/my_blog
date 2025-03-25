import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <footer className="bg-[#232536] text-white py-12">
            <div className="max-w-6xl mx-auto px-6">
                {/** */}
            <div className='w-full h-[80px] my-5'>
            <div className='flex justify-between items-center h-full w-full'>
            <div>
                <Link href={'/'}>
                    <h2 className='text-[#fff] font-semibold tracking-widest text-2xl leading-none'>Finsweet</h2>
                </Link>
            </div>
            <div className='flex items-center '>
                <ul className='hidden sm:flex'>
                    <Link href={'/'}>
                        <li className='ml-7  text-[#fff]'>Home</li>
                    </Link>
                    <Link href={'/blog'}>
                        <li className='ml-7  text-[#fff]'>Blog</li>
                    </Link>
                    <Link href={'/about'}>
                        <li className='ml-7  text-[#fff]'>About Us</li>
                    </Link>
                    <Link href={'/contact'}>
                        <li className='mx-7  text-[#fff]'>Contact Us</li>
                    </Link>
                </ul>
            </div>
            </div>
        </div>
        {/** */}
                <div className="bg-[#1E1E1E] py-8 px-10 rounded-lg flex flex-col md:flex-row justify-between items-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-0">
                        Subscribe to our newsletter to get latest updates and news
                    </h2>
                    <div className="flex">
                        <input 
                        type="email" 
                        placeholder="Enter Your Email" 
                        className="px-4 py-3 w-60 text-black rounded-l-md outline-none"
                        />
                        <button className="bg-[#FDC221] text-black font-semibold px-6 py-3 rounded-r-md">
                        Subscribe
                        </button>
                    </div>
                </div>

                <div className="mt-10 flex flex-col md:flex-row justify-between items-start text-gray-400 text-sm">
                    <p>
                        Finstreet 118 2561 Fintown <br />
                        Hello@finsweet.com | 020 7993 2905
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <FaFacebookF className="hover:text-white cursor-pointer" />
                        <FaTwitter className="hover:text-white cursor-pointer" />
                        <FaInstagram className="hover:text-white cursor-pointer" />
                        <FaLinkedinIn className="hover:text-white cursor-pointer" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer