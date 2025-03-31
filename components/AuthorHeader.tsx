import { FaMeta } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";

function AuthorHeader() {
    return (
        <div className='relative w-full mx-auto p-6 sm:p-12 h-auto flex flex-col sm:flex-row items-center justify-center bg-[#e8e5ec] gap-6'>
    
    {/** Image en premier */}
    <div className="bg-[url('/images/profile2.jpg')] w-[250px] h-[290px] bg-cover bg-center">
    </div>

    <div className=" ">
        {/** Texte au centre */}
        <div className="max-w-[660px] px-4 sm:max-w-[624px] sm:px-10 text-center sm:text-left ">
            <h1 className="text-3xl font-bold mt-2 tracking-wide text-[#232536]">
                Hey there, I’m Andrew Jonhson and welcome to my Blog
            </h1>
            <p className="mt-4 text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cum, eum veritatis magnam sed placeat ipsa quaerat minima culpa cupiditate consectetur commodi quia ipsam vitae repellendus nobis molestias! Assumenda, dicta.
            </p>
        </div>

        {/** Icônes des réseaux sociaux en dernier */}
        <div className="flex items-center justify-center sm:justify-start mt-4 ml-0 md:ml-6 text-gray-700">
            <FaMeta className='cursor-pointer m-3 hover:text-black' />
            <FaInstagram className='cursor-pointer m-3 hover:text-black'/>
            <CiTwitter className='cursor-pointer m-3 hover:text-black'/>
            <FaLinkedinIn className='cursor-pointer m-3 hover:text-black'/>
        </div>
    </div>

    {/** Décoration en bas */}
    <div className="absolute bottom-0 left-0 w-[80%] h-3 flex justify-end">
        <div className="bg-[#FFD050] w-1/2"></div>
        <div className="bg-[#592EA9] w-1/4"></div>
    </div>

</div>

    )
}

export default AuthorHeader