import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function TestMonial() {
    return (
        <div className="w-full max-w-6xl mx-auto py-14 px-6 bg-[#FBF6EA] flex items-center justify-between my-10">
        
            <div className="border-r border-gray-300 px-10 pl-16 max-w-[350px]">
                <h3 className="text-sm font-medium text-gray-600 tracking-widest pb-3">
                TESTIMONIALS
                </h3>
                <h2 className="font-bold text-3xl text-gray-900 leading-tight">
                What people say about our blog
                </h2>
                <p className="text-sm text-gray-600 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
            </div>

            <div className="px-10 relative max-w-[500px]">
                <p className="text-lg font-medium text-gray-900 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex items-center justify-between pt-8">    
                <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
                    <AvatarFallback>FA</AvatarFallback>
                    </Avatar>
                    <div>
                    <h2 className="text-md font-semibold text-gray-900">Jonathan Vallem</h2>
                    <p className="text-sm text-gray-500">New York, USA</p>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                    <FaArrowLeft />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800">
                    <FaArrowRight />
                    </button>
                </div>
                </div>
            </div>
            </div>
    )
}

export default TestMonial