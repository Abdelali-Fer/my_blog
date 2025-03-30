"use client";
import Image from "next/image"
import React from "react"
import { useRouter } from 'next/navigation'

interface Typeprops {
    id:number;
    image:string;
    category:string,
    title:string,
    description:string
}


function OnePost({id,image,category,title,description}:Typeprops) {
    const router = useRouter()

    return (
                <div
        className="flex flex-col md:flex-row items-center mb-10 p-4 hover:bg-[#F4F0F8] cursor-pointer transition-all"
        onClick={() => router.push(`/blog/details/${id}`)}
        >
        {/* Image */}
        <img
            src={image}
            className="w-full max-w-[410px] md:max-w-[280px] lg:max-w-[450px] object-cover rounded-lg"
        />

        {/* Contenu */}
        <div className="w-full md:max-w-[600px] mt-4 md:mt-0 md:ml-5 text-wrap text-center md:text-left">
            <h2 className="text-lg md:text-xl font-semibold mb-2 tracking-widest uppercase text-[#592EA9]">
            {category}
            </h2>
            <h2 className="text-xl md:text-2xl font-bold mt-2 tracking-wide my-2">
            {title}
            </h2>
            <p className="text-gray-600 text-sm md:text-base">{description}</p>
        </div>
        </div>

    )
}

export default OnePost