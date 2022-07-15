import React from 'react'
import { Link } from 'react-router-dom'
import { DarkButton } from '../styles/Button'
import '../AboutContent/AboutStyles.css'
import React2 from '../AboutContent/profilePicture.jpeg'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I</h1>
            <p> I am a self- taught frontend developer that is passionate about boobs</p>
            <Link to='/contact'>
                <DarkButton>
                    CONTACT ME
                </DarkButton>
            </Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={React2}
                    className='img'
                    alt='back'/>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default AboutContent