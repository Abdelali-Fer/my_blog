import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

function TestMonial() {
    return (
        <div className="w-full max-w-6xl mx-auto py-14 px-4 sm:px-6 md:px-10 bg-[#FBF6EA] flex flex-col md:flex-row items-center justify-between my-10 gap-8">
    {/* Bloc gauche : Titre + Description */}
    <div className="border-b md:border-r md:border-b-0 border-gray-300 pr-6 md:pr-10 max-w-[350px] text-center md:text-left">
        <h3 className="text-sm font-medium text-gray-600 tracking-widest pb-3">
            TESTIMONIALS
        </h3>
        <h2 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight">
            What people say about our blog
        </h2>
        <p className="text-sm text-gray-600 mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
    </div>

    {/* Bloc droit : Témoignage */}
    <div className="px-4 sm:px-6 md:px-10 relative max-w-[500px]">
        <p className="text-lg font-medium text-gray-900 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {/* Avatar + Informations */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8">    
            <div className="flex items-center">
                <Avatar className="w-12 h-12 mr-3">
                    <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
                    <AvatarFallback>JV</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                    <h2 className="text-md font-semibold text-gray-900">Jonathan Vallem</h2>
                    <p className="text-sm text-gray-500">New York, USA</p>
                </div>
            </div>
            {/* Boutons de navigation */}
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300">
                    <FaArrowLeft />
                </button>
                <button className="w-9 h-9 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800">
                    <FaArrowRight />
                </button>
            </div>
        </div>
    </div>
</div>

    )
}

export default TestMonial