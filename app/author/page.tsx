import AllPosts from '@/components/AllPosts'
import AuthorHeader from '@/components/AuthorHeader'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import OnePost from '@/components/OnePost'
import { SignupForm } from '@/components/SignupForm'
import React from 'react'

function page() {
    const Posts=[
        {id:1,image:'/images/employs.jpeg'  ,category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'},
        {id:2,image:'/images/employs.jpeg',category:'startup',title:'Design tips for designers that cover everything you need',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum minima illo, sunt vero, deleniti recusandae a'}
    ]
    return (
        <div>
            <Navbar/>
            <div className="container flex h-screen w-screen flex-col items-center justify-center">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
                    <p className="text-sm text-muted-foreground">Enter your details below to create your account</p>
                    </div>
                    <SignupForm />
                </div>
                </div>
            {/*
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
            </div>*/}
            <Footer/>

        </div>
    )
}

export default page