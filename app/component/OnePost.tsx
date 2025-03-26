import Image from "next/image"
import React from "react"

interface Typeprops {
    image:React.ReactNode;
    category:string,
    title:string,
    description:string
}


function OnePost({image,category,title,description}:Typeprops) {
    return (
        <div className="flex items-center  mb-10">
            <Image
            src={'/images/employs.jpeg'}
            alt='photo'
            width={400}
            height={220}
            />
            <div className="max-w-[600px] ml-5 text-wrap">
                <h2 className="text-xl font-semibold mb-2 tracking-widest uppercase text-[#592EA9]">startup</h2>
                <h2 className="text-2xl font-bold mt-2 tracking-wide my-2">Design tips for designers that cover everything you need</h2>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a</p>
            </div>
        </div>
    )
}

export default OnePost