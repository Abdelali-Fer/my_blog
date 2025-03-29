import React from 'react'


function AboutUsHeader() {
    return (
        <div className='relative w-full max-w-6xl mx-auto bg-[#F4F0F8] mb-10'>
            <div className='absolute bg-white w-[400px] left-20 top-[80px] z-10 p-10'>
                <h4 className="text-gray-700 text-sm font-semibold">ABOUT US</h4>
                <h2 className="text-3xl font-semibold text-gray-900 mt-2">
                    We are a community of content writers who share their learnings
                </h2>
                        
            </div>
            <div className='h-[220px] bg-white'>

            </div>
            <div className="relative bg-[url('/images/group1.jpeg')] bg-cover bg-center h-[360px]  z-0">
                <div className='absolute w-[80%] bottom-0 left-20'>
                    <div className='bg-[#FFD050] w-[550px] h-auto flex items-center justify-around'>
                        <div className='py-4'>
                            <h2 className='text-4xl font-bold text-[#232536]'>12+</h2>
                            <p className='text-[#232536] text-sm'>Blog Published</p>
                        </div>
                        <div>
                            <h2 className='text-4xl font-bold text-[#232536]'>18<span>k</span>+</h2>
                            <p className='text-[#232536] text-sm'>Views on Finsweet</p>
                        </div>
                        <div>
                            <h2 className='text-4xl font-bold text-[#232536]'>30<span>k</span>+</h2>
                            <p className='text-[#232536] text-sm'>Total active Users</p>
                        </div>
                    </div>
                    <div className="w-full h-2 flex">
                        <div className="bg-[#592EA9] w-1/4"></div>
                        <div className="bg-[#FFD050] w-1/2"></div>
                    </div> 
                </div>
            </div>

            <div className="w-full max-w-6xl mx-auto px-6 py-20 bg-[#F4F0F8]">
                {/* Contenu */}
                <div className="grid grid-cols-2 gap-12 mt-4">
                {/* Section About Us */}
                    <div>
                        <h4 className="text-gray-600 text-sm font-semibold">ABOUT US</h4>
                        <h2 className="text-2xl font-bold text-gray-900 mt-2">
                            We are a community of content writers who share their learnings
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                {/* Section Our Mission */}
                <div>
                    <h4 className="text-gray-600 text-sm font-semibold">OUR MISSION</h4>
                    <h2 className="text-2xl font-bold text-gray-900 mt-2">
                        Creating valuable content for creatives all around the world
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default AboutUsHeader