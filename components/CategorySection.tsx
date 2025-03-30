import React from 'react'
import Image from "next/image"
import OnePost from './OnePost'
import CardTitle from './CardTitle'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import { BsGraphUpArrow } from 'react-icons/bs'
import { MdOutlineRocketLaunch } from 'react-icons/md'
import { SiKingstontechnology } from 'react-icons/si'

function CategorySection() {
    const Posts=[
        {id:1,image:'/images/employs.jpeg'  ,category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'},
        {id:2,image:'/images/employs.jpeg',category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'},
        {id:3,image:'/images/employs.jpeg',category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'},
        {id:4,image:'/images/employs.jpeg',category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'}
    ]
    const Categorie=[
        { icon: <TbBuildingSkyscraper size={20}/>, title: "Economy"},
        { icon: <BsGraphUpArrow size={20}/>, title: "Finance"},
        { icon: <MdOutlineRocketLaunch size={20}/>, title: "Innovation"},
        { icon: <SiKingstontechnology size={20}/>, title: "Technology"}
    ]
    
    return (
        <div className='flex flex-col md:flex-row items-start justify-center md:justify-around px-4 md:px-14 mt-4'>
            <div className='md:w-[65%] '>
            {Posts.map((item) => (
                    <OnePost  id={item.id}  image={item.image} category={item.category} title={item.title} description={item.description}/>
                ))}
            </div>
            <div className='w-full md:w-[30%] mt-8 md:mt-0'>
                <h2 className='font-bold text-3xl my-4'>Categories</h2>
                <div className='w-full flex items-start flex-col '>
                    {
                        Categorie.map((item)=>(
                            <CardTitle icon={item.icon} title={item.title}/>
                        ))
                    }
                </div>
                <h2 className='font-bold text-3xl py-3 mt-4'>All Tags</h2>
                <div className='flex flex-wrap gap-2 pb-5'>
                    {
                        Categorie.map((item)=>(
                            <p className='text-[#6D6E76] border rounded-xl px-4 py-1 '>{item.title} </p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategorySection