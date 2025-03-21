import React from 'react'

function HomeHero() {
    return (
        <div className="relative w-full h-[620px] text-white flex items-center">
        {/* Image en arrière-plan */}
        <div className="absolute inset-0 bg-[url('/images/image1.jpeg')] bg-cover bg-center"></div>

        {/* Dégradé sombre */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Contenu */}
        <div className="relative z-10 max-w-3xl px-10">
            <p className="text-sm uppercase text-gray-300 tracking-widest">Posted on <span className="font-bold text-white">Startup</span></p>
            <h1 className="text-4xl font-bold mt-2 tracking-wide">
                Step-by-step guide to choosing great font pairs
            </h1>
            <p className="mt-4 text-gray-300">
                By <span className="text-yellow-400">James West</span> | May 23, 2022
            </p>
            <p className="mt-4 text-gray-300">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-md">
                Read More →
            </button>
        </div>
    </div>
    )
}

export default HomeHero