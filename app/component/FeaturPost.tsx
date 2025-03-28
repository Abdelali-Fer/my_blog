import Image from 'next/image'

function FeaturPost() {
  return (
    <div className='w-full h-auto  px-[130px] pt-[80px] mb-16'>
        <div className='flex items-center justify-between'>
            <h2 className='font-bold text-3xl'>Featured Post</h2>
            <h2 className='font-bold text-3xl'>Some Posts</h2>
        </div>
        <div className='grid grid-cols-3 gap-4 mt-8'>
            <div className='col-span-2 border-2 border-solid basis-128 flex flex-col items-center  justify-center pb-3'>
                <Image
                src={'/images/house.jpeg'}
                alt='House'
                width={700}
                height={150}
                className='pt-5'
                objectFit="cover" 
                layout="intrinsic"
                />
                <div className="relative z-10 max-w-3xl px-10">
                    <p className="mt-4">
                        By <span className="text-purple-900">James West</span> | May 23, 2022
                    </p>
                    <h1 className="text-4xl font-bold mt-2 tracking-wide">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    <p className="mt-4">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-md">
                        Read More →
                    </button>
                </div>
            </div>
            <div className='basis-64 w-full ml-[30px] mr-[30px]'>
                <div className="hover:bg-[#FBF6EA] cursor-pointer py-7">
                    <p className="mt-4 ">
                        By <span className="text-purple-900">James West</span> | May 23, 2022
                    </p>
                    <h1 className="text-2xl font-bold mt-2 tracking-wide">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    
                </div>
                <div className="hover:bg-[#FBF6EA] cursor-pointer ">
                    <p className="mt-4 ">
                        By <span className="text-purple-900">James West</span> | May 23, 2022
                    </p>
                    <h1 className="text-2xl font-bold mt-2 tracking-wide">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    
                </div>
                <div className="hover:bg-[#FBF6EA] cursor-pointer ">
                    <p className="mt-4 ">
                        By <span className="text-purple-900">James West</span> | May 23, 2022
                    </p>
                    <h1 className="text-2xl font-bold mt-2 tracking-wide">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    
                </div>
                <div className="hover:bg-[#FBF6EA] cursor-pointer ">
                    <p className="mt-4 ">
                        By <span className="text-purple-900">James West</span> | May 23, 2022
                    </p>
                    <h1 className="text-2xl font-bold mt-2 tracking-wide">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                    
                </div>
                <div className="hover:bg-[#FBF6EA] cursor-pointer ">
                    <p className="mt-4 ">
                        By <span className="text-purple-900">James West</span> | May 23, 2022
                    </p>
                    <h1 className="text-2xl font-bold mt-2 tracking-wide">
                        Step-by-step guide to choosing great font pairs
                    </h1>
                </div>
            </div>
        </div>
    </div>
)
}

export default FeaturPost