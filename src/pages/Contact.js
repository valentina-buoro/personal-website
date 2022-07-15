import React from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import Hero2 from '../components/Hero2/Hero2'
import ContactForm from '../components/ContactForm/ContactForm'


const Contact = () => {
  return (
    <>
    <Navbar/>
    <Hero2 heading='CONTACT ME' text='reach out to me'/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Contact