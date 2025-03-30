
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import NavBar from "@/components/NavBar";
import Post from "@/components/Post";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getHtml } from "@/lib/data";
import { MdOutlineRocketLaunch } from "react-icons/md";




async function Blogdetails({params}:{params:{blogdetails:number}}) {

  const html = await getHtml();

  const Posts=[
          {id:1,image:"/images/image1.jpeg"  ,name:'James West',date:"May 23, 2022",title:'Design tips for designers that cover everything you need',description:'Lorem reiciendis incidunt minus cupiditate aspernatur praesentium sinti, officiis molestiae perferendis quisquam accusamus alias ducimus.'},
          {id:2,image:"/images/image1.jpeg",name:'James West',date:"May 23, 2022",title:'Design tips for designers that cover everything you need',description:'Lorem reiciendis incidunt minus cupiditate aspernatur praesentium sinti, officiis molestiae perferendis quisquam accusamus alias ducimus.'},
          {id:3,image:"/images/image1.jpeg",name:'James West',date:"May 23, 2022",title:'Design tips for designers that cover everything you need',description:'Lorem reiciendis incidunt minus cupiditate aspernatur praesentium sinti, officiis molestiae perferendis quisquam accusamus alias ducimus.'}
      ]
  return (
    <div>
      <NavBar />
      {/* Blogdetails number {params.blogdetails}  */}
      
      <div className="w-full flex items-center justify-center mt-14">
        <div className="max-w-[700px] mx-auto ">
          {/**profile */}
          <div className="flex items-center justify-between flex-wrap md:flex-nowrap py-5">    
            
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
          <h1 className="text-3xl sm:text-4xl font-bold my-2 tracking-wide w-[80%] text-center text-[#232536]">
            Step-by-step guide to choosing great font pairs
          </h1>
          {/**category */}
          <div className="flex items-center justify-center md:justify-normal mt-6 sm:mt-10">
            <MdOutlineRocketLaunch size={25} className="text-[#4C4C4C] "/>
            <p className="font-semibold text-[#4C4C4C]">Category</p>
          </div>
        </div>
      </div>
      {/** markdown ici */}
      <MarkdownRenderer content={html}/>
      <div className="w-full mt-32 px-4 sm:px-8 md:px-16 mb-20">
    <div className='flex items-center justify-start'>
        <h2 className='font-bold text-3xl'>What to read next</h2>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {Posts.map((item) => (
            <Post 
                key={item.id} 
                id={item.id} 
                image={item.image} 
                name={item.name} 
                title={item.title} 
                date={item.date} 
                descreption={item.description} 
            />
        ))}
    </div>
</div>
      <Footer />
    </div>
  )
}

export default Blogdetails