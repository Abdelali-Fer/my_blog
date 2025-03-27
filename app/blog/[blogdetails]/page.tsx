"use client";
import NavBar from "@/app/component/NavBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MdOutlineRocketLaunch } from "react-icons/md";




function Blogdetails({params}:{params:{blogdetails:number}}) {





  return (
    <div>
      <NavBar />
      {/* Blogdetails number {params.blogdetails}  */}
      
      <div className="w-full flex items-center justify-center mt-14">
        <div className="max-w-[700px]">
          {/**profile */}
          <div className="flex items-center justify-between py-5">    
            
              <div className="flex items-center">
                <Avatar className="w-10 h-10 mr-3">
                  <AvatarImage src="https://github.com/shadcn.png" className="rounded-full" />
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
              <div>
              <h2 className="text-md font-semibold text-[#592EA9] ">Jonathan Vallem</h2>
              <p className="text-sm text-gray-500">Posted on 27th January 2022</p>
              </div>
              </div>

          </div>
          {/**title */}
          <h1 className="text-4xl font-bold my-2 tracking-wide w-[80%]">
            Step-by-step guide to choosing great font pairs
          </h1>
          {/**category */}
          <div className="flex items-center mt-10">
            <MdOutlineRocketLaunch size={25}/>
            <p className="font-semibold">Category</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Blogdetails