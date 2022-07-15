import React from 'react'

import Navbar from '../components/Header/Navbar'
import Footer from '../components/Footer/Footer'
import Hero2 from '../components/Hero2/Hero2'
import PricingCard from '../components/PricingCard/PricingCard'
import Work from '../components/WorkCard/Work'

const Projects = () => {
  return (
    <>
    <Navbar/>
    <Hero2 heading='PROJECTS' text='Some of my recent works'/>
    <Work/>
    <PricingCard/>
    <Footer/>
    </>
  )
}

export default Projects