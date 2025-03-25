import React from 'react'

function AboutSection() {
  return (
    <div className="relative w-full max-w-6xl mx-auto py-10 px-6 bg-[#F4F0F8]">
      {/* Barre colorée */}
      <div className="absolute top-0 left-0 w-full h-2 flex justify-end">
        <div className="bg-yellow-400 w-1/2"></div>
        <div className="bg-purple-600 w-1/4"></div>
      </div>

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
          <a href="#" className="text-purple-600 font-semibold mt-4 inline-block">
            Read More &gt;
          </a>
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
  )
}

export default AboutSection