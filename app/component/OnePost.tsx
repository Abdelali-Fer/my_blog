"use client";
import Image from "next/image"
import React from "react"
import { useRouter } from 'next/navigation'

interface Typeprops {
    id:number;
    image:React.ReactNode;
    category:string,
    title:string,
    description:string
}


function OnePost({id,image,category,title,description}:Typeprops) {
    const router = useRouter()

    return (
        <div className="flex items-center  mb-10 hover:bg-[#F4F0F8] cursor-pointer" onClick={() => router.push(`/blog/${id}`)}>
            {image}
            <div className="max-w-[600px] ml-5 text-wrap">
                <h2 className="text-xl font-semibold mb-2 tracking-widest uppercase text-[#592EA9]">{category}</h2>
                <h2 className="text-2xl font-bold mt-2 tracking-wide my-2">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    )
}

export default OnePost