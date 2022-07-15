import React from 'react'
import HeroImage from '../components/Hero/HeroImage'
import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import Work from '../components/WorkCard/Work'

const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroImage/>
    <Work/>
    <Footer/>
    </>
  )
}

export default Home