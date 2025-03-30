import Link from 'next/link'
import React from 'react'

type Typeprops={
    categorie:string
}

function BlogCategorie({categorie}:Typeprops) {
    return (
    <div className='w-full p-5 h-[340px] flex items-center justify-center bg-[#e8e5ec]'>
            <div className="max-w-[624px] px-10">
                <h1 className="text-4xl font-bold mt-2 tracking-wide text-center text-[#232536] ">
                    {categorie}
                </h1>
                <p className="mt-4 text-[#6D6E76] text-center">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <div className='flex items-center justify-center py-6 text-[#232536] '>
                    <Link href={'/blog'} className='text-[#232536] px-2 font-medium'>
                        Blog
                    </Link>
                    &gt;
                    <Link href={`/blog/categorie/${categorie}`} className='text-[#232536] px-2 font-medium'>
                        {categorie}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BlogCategorie