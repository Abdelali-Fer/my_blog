import AuthorHeader from '@/components/AuthorHeader'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import OnePost from '@/components/OnePost'
function page() {
    const Posts=[
        {id:1,image:'/images/employs.jpeg'  ,category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'},
        {id:2,image:'/images/employs.jpeg',category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'}
    ]
    return (
        <div>
            <Navbar/>
            <AuthorHeader/>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-32 py-8 md:my-10">
                <h2 className="font-bold text-xl sm:text-2xl md:text-3xl text-center md:text-left">
                    My Posts
                </h2>
            </div>
            <div className='flex items-center justify-center'>
                <div className='md:w-[65%] '>
                    {Posts.map((item) => (
                            <OnePost  id={item.id}  image={item.image} category={item.category} title={item.title} description={item.description}/>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default page