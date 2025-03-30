import Image from 'next/image'

function FeaturPost() {
  return (
    <div className="w-full h-auto px-4 md:px-10 lg:px-32 pt-10 mb-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
    
    {/* Section Featured Post */}
    <div className="px-1">
      <h2 className="font-bold text-2xl md:text-3xl py-2 text-center md:text-left">Featured Post</h2>
      <div className="border-2 border-solid flex flex-col items-center justify-center px-4 py-5">
        <img src="/images/house.jpeg" alt="House" className="w-full max-w-[600px] h-[350px] object-cover" />
        <div className="relative z-10 max-w-3xl px-6 text-center md:text-left">
          <p className="mt-4 text-gray-600">
            By <span className="text-[#592EA9]">James West</span> | May 23, 2022
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2 tracking-wide">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="mt-4 text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="mt-6 px-6 py-3 bg-[#FFD050] text-black font-bold rounded-md transition hover:bg-yellow-400">
            Read More →
          </button>
        </div>
      </div>
    </div>

    {/* Section Some Posts */}
    <div className="px-1">
      <h2 className="font-bold text-2xl md:text-3xl py-2 text-center md:text-left">Some Posts</h2>
      <div className="w-full px-4 md:px-6">
        {Array(5).fill(null).map((_, index) => (
          <div key={index} className="hover:bg-[#FBF6EA] cursor-pointer py-5 border-b border-gray-300">
            <p className="mt-4 text-gray-600">
              By <span className="text-[#592EA9]">James West</span> | May 23, 2022
            </p>
            <h1 className="text-xl md:text-2xl font-bold mt-2 tracking-wide">
              Step-by-step guide to choosing great font pairs
            </h1>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

)
}

export default FeaturPost