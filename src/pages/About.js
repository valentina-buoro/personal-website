import React from 'react'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import Hero2 from '../components/Hero2/Hero2'
import AboutContent from '../components/AboutContent/AboutContent'


const About = () => {
  return (
    <>
    <Navbar/>
    <Hero2 heading='ABOUT' text='get to know me!'/>
    <AboutContent/>
    <Footer/>
    </>
  )
}

export default About