import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

function ProfileAuthr() {
    return (
        <div className='max-w-xs mx-auto bg-gray-100 rounded-xl shadow-md p-6 text-center mt-10'>
            <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto">
                <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
                <AvatarFallback>FA</AvatarFallback>
            </Avatar>
            <h2 className="mt-3 md:mt-4 text-base md:text-lg font-semibold text-gray-900">Ferroui Abdelali</h2>
            <p className="text-xs md:text-sm text-gray-500">Content Writer @Company</p>
            <div className="grid grid-cols-4 mt-4 text-gray-700">
                <FaMeta className='cursor-pointer'/>
                <FaInstagram className='cursor-pointer'/>
                <CiTwitter className='cursor-pointer'/>
                <FaLinkedinIn className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default ProfileAuthr