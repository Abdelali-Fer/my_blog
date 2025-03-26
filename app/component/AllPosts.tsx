import Link from "next/link"
import OnePost from "./OnePost"
import Carde from "./Carde"
import Image from "next/image"


function AllPosts() {
    const Posts=[
        {image:<Image src={'/images/employs.jpeg'}alt='photo'width={400}height={220}/>  ,category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'},
        {image:<Image src={'/images/employs.jpeg'}alt='photo'width={400}height={220}/>,category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'},
        {image:<Image src={'/images/employs.jpeg'}alt='photo'width={400}height={220}/>,category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'},
        {image:<Image src={'/images/employs.jpeg'}alt='photo'width={400}height={220}/>,category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'}
    ]
    return (
        <div className="mx-24 py-10">
            {Posts.map((item, index) => (
                <OnePost image={item.image} category={item.category} title={item.title} description={item.description}/>
            ))}
            <div className="flex items-center justify-center gap-3">
            <Link href={'/'}>
                <button className='text-lg font-medium text-gray-500 hover:text-black'>&lt; Prev</button>
            </Link>
            <Link href={'/'}>
                <button className='text-lg font-medium text-gray-500 hover:text-black'>Next &gt;</button>
            </Link>
            </div>
        </div>
    )
}

export default AllPosts