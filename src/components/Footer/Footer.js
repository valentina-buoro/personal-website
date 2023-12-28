import React from 'react'
import '../Footer/FooterStyles.css'
import { FaMailBulk, FaTwitter, FaLinkedin,FaGithub } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
               
          
               <div className='phone'>
                <h4>
                <FaMailBulk size={20} style={{color:'#ffff', marginRight:'2rem'}} />
                valentinabuoro4@gmail.com
              
                </h4>
               
               </div>


            </div>
            <div className='right'>
                
                <div className='social' style={{'marginTop':'2rem'}}>
                <a href='https://github.com/queen-x-vee'><FaGithub size={30} style={{color:'#fff', marginRight:'2rem'}} /></a>
                <a href='https://twitter.com/valentinaBuoro'><FaTwitter size={30} style={{color:'#fff', marginRight:'2rem'}} /></a>
                <a href='https://linkedin.com/in/valentina-buoro'><FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
