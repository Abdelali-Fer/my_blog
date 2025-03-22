import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

function ProfileAuthr() {
    return (
        <div className='max-w-xs mx-auto bg-gray-100 rounded-xl shadow-md p-6 text-center mt-10'>
            <Avatar className="w-24 h-24 mx-auto">
                <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
                <AvatarFallback>FA</AvatarFallback>
            </Avatar>
            <h2 className="mt-4 text-lg font-semibold text-gray-900">Ferroui Abdelali</h2>
            <p className="text-sm text-gray-500">Content Writer @Company</p>
            <div className="flex justify-center gap-4 mt-4 text-gray-700">
                <FaMeta className='cursor-pointer'/>
                <FaInstagram className='cursor-pointer'/>
                <CiTwitter className='cursor-pointer'/>
                <FaLinkedinIn className='cursor-pointer'/>
            </div>
        </div>
    )
}

export default ProfileAuthr