import React from 'react'
import HeroImage from '../components/Hero/HeroImage'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import Work from '../components/WorkCard/Work'
import ContactForm from '../components/ContactForm/ContactForm'
import AboutContent from '../components/AboutContent/AboutContent'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroImage/>
    <AboutContent/>
    <Work/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default Home