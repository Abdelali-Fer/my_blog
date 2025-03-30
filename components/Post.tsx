"use client"

import { useRouter } from "next/navigation";


interface Typeprops {
    id:number;
    image:string;
    name:string;
    date:string;
    title:string;
    descreption:string;
}


function Post({id,image,name,date,title,descreption}:Typeprops) {

    const router =useRouter()
    return (
        <div className='max-w-[380px] hover:cursor-pointer group ' onClick={() => router.push(`/blog/${id}`)}>
            <img src={image} alt="" className='w-[380px] h-[300px] rounded-none'  />
            <p className="mt-4">
                By <span className="text-[#592EA9]">{name}</span> | {date}
            </p>
            <h2 className="text-2xl font-bold tracking-wide my-2 group-hover:underline">{title}</h2>
            <p className="text-gray-600">
                {descreption}
            </p>
        </div>
    )
}

export default Post