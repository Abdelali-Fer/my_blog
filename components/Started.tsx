import React from 'react'

function Started() {
    return (
        <div className="w-full max-w-6xl mx-auto py-12 space-y-16 px-4 md:px-10 lg:px-22 ">
    
    {/* Section 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Texte */}
        <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">Our team of creatives</h2>
            <p className="text-gray-700 font-semibold mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

        {/* Image */}
        <div className="relative w-full flex justify-center">
            <img src="images/employs.jpeg" alt="Teamwork" className="rounded-lg w-full max-w-md md:max-w-full h-auto" />
            <div className="absolute top-[40%] left-[-20px] md:left-[-30px] bg-[#FFD050] w-10 md:w-12 h-10 md:h-12 rounded-tl-3xl"></div>
        </div>

    </div>

    {/* Section 2 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Image */}
        <div className="relative w-full flex justify-center">
            <img src="images/employs.jpeg" alt="Discussion" className="rounded-lg w-full max-w-md md:max-w-full h-auto" />
            <div className="absolute bottom-0 left-[5%] md:left-[10%] bg-[#592EA9] w-10 md:w-12 h-10 md:h-12 rounded-full"></div>
        </div>

        {/* Texte */}
        <div className="text-center md:text-left">
            <h2 className="text-xl md:text-2xl font-bold">Why we started this Blog</h2>
            <p className="text-gray-700 font-semibold mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>

    </div>

</div>

    )
}

export default Started