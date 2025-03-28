import React from 'react'
import NavBar from '../../components/NavBar'
import BlogHeader from '../../components/BlogHeader'
import AllPosts from '../../components/AllPosts'
import ChoseCategory from '../../components/ChoseCategory'
import Footer from '../../components/Footer'

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