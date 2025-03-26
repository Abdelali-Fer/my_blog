import React from 'react'
import NavBar from '../component/NavBar'
import BlogHeader from '../component/BlogHeader'
import AllPosts from '../component/AllPosts'
import ChoseCategory from '../component/ChoseCategory'
import Footer from '../component/Footer'

function Blog() {
  return (
    <div>
      <NavBar/>
      <BlogHeader/>
      <div className='my-10 mx-24 border-b-[2px] pb-8'>
        <h2 className='font-bold text-3xl'>All posts</h2>
      </div>
      <AllPosts />
      <ChoseCategory />
      <Footer/>
    </div>
  )
}

export default Blog