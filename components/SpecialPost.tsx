import React from 'react'

function SpecialPost() {
    return (
        <div className='relative w-full  px-[120px] py-5 my-14 h-[488px]'>
            <img src="/images/paris.jpeg" alt="paris" className='-z-10 absolute top-0 bottom-0'/>
            <div className='z-0 bg-white w-[40%] absolute right-40 p-12  bottom-0'>
                <h3 className='decoration-solid font-semibold uppercase'>WHY WE STARTED</h3>
                <h2 className='text-3xl font-bold text-gray-900 mt-2 tracking-wider'>It started out as a simple idea and evolved into our passin</h2>
                <p className='text-xs text-gray-600 py-4 pr-[10px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus quis, minus dolores odio, deleniti iure 
                possimus maxime placeat sed numquam exercitationem autem totam facere nihil dicta. Quo voluptatibus officia culpa.</p>
                <button className="mt-6 px-6 py-3 bg-[#FFD050] text-black font-bold rounded-md">
                    Discover our story &gt;
                </button>
            </div>
        </div>
    )
}

export default SpecialPost