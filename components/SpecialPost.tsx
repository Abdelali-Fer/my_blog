import React from 'react'

function SpecialPost() {
    return (
        <div className='relative w-full  px-6 md:px-[120px] py-5 my-14 h-[488px]'>

            <img src="/images/paris.jpeg" alt="paris" className='-z-10 absolute top-0 bottom-0'/>
            
            <div className='z-0 bg-white w-[70%] md:w-[40%] absolute bottom-[-20%] md:bottom-0 right-[10%] md:right-40 p-6 md:p-12'>
                <h3 className='decoration-solid font-semibold uppercase text-sm md:text-base'>WHY WE STARTED</h3>
                <h2 className='text-xl md:text-3xl font-bold text-gray-900 mt-2 tracking-wider'>It started out as a simple idea and evolved into our passin</h2>
                <p className='text-xs md:text-sm text-gray-600 py-4 pr-[10px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quis, minus dolores odio, deleniti iure 
                possimus maxime placeat sed numquam exercitationem autem totam facere nihil dicta. Quo voluptatibus officia culpa.</p>
                <button className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3  bg-[#FFD050] text-black font-bold rounded-md">
                    Discover our story &gt;
                </button>
            </div>
        </div>
    )
}

export default SpecialPost