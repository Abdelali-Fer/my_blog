import Image from 'next/image'

function BlogHeader() {
    return (
        <div className='w-full p-12 h-[520px] flex items-center justify-between bg-[#e8e5ec]'>
            {/** gauch */}
            <div className="max-w-[624px] px-10">
                <p className="text-base uppercase text-black tracking-widest">Posted on Startup</p>
                    <h1 className="text-2xl font-bold mt-2 tracking-wide">
                    Step-by-step guide to choosing great <br/> font pairs
                </h1>
                <p className="mt-4">
                    By <span className="text-[#592EA9]">James West</span> | May 23, 2022
                </p>
                <p className="mt-4 text-gray-400">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-medium">
                    Read More &gt;
                </button>
            </div>
            {/**droit */}
            <div className='flex items-center justify-center mr-10'>
                <Image
                src={'/images/employs.jpeg'}
                alt='House'
                width={500}
                height={350}
                className='p-3'
                objectFit="cover" 
                layout="intrinsic"
                />
            </div>
        </div>
    )
}

export default BlogHeader