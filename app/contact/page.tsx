import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Navbar from '@/components/NavBar'
import React from 'react'

function Contact() {
  return (
    <div>
      <Navbar/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact