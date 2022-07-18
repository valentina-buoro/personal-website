import React from 'react'
import { Link } from 'react-router-dom'
import '../Hero/Hero.css'
import Laptop from '../Hero/grey.jpeg'
import { DarkButton, LightButton } from '../styles/Button'

const HeroImage = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img' src={Laptop} alt='latoptop' />
            </div>



            <div className='content linear'>
                <p className='revealUp'>HELLO, I'M VALENTINA</p>
                <h1>A React Developer</h1>
                <h3>
                <i>I am a frontend developer that is passionate about creating beautiful
                    UI and UX for ease of navigation. I will create beautiful websites that you will love, using the 
                    latest technologies.
                </i></h3>


                <div>
                    <DarkButton className='btn'>
                        <Link to='/projects'>
                            PROJECTS
                        </Link>
                    </DarkButton>

                    <LightButton>
                        <Link to='/contact'>
                            CONTACT ME
                        </Link>
                    </LightButton>
                </div>
            </div>

        </div>

    )
}

export default HeroImage