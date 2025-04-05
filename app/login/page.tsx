import AllPosts from '@/components/AllPosts'
import AuthorHeader from '@/components/AuthorHeader'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import OnePost from '@/components/OnePost'
import { LoginForm } from '@/components/LoginForm'
import React from 'react'

function login() {
    return (
        <div>
                <Navbar/>
                <div className="container flex h-screen w-screen flex-col items-center justify-center">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                        <div className="flex flex-col space-y-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
                        <p className="text-sm text-muted-foreground">Enter your details below to login your account</p>
                        </div>
                        <LoginForm />
                    </div>
                    </div>
                <Footer/>
        </div>
    )
}

export default login