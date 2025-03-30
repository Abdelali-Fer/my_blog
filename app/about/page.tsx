import AboutUsHeader from '@/components/AboutUsHeader'
import AuthorList from '@/components/AuthorList'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import Started from '@/components/Started'
import React from 'react'

function About() {
  return (
    <div>
      <NavBar/>
      <AboutUsHeader/>
      <Started/>
      <AuthorList/>
      <Footer/>
    </div>
  )
}

export default About