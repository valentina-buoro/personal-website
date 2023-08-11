import React from 'react'
import '../Footer/FooterStyles.css'
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedin,FaGithub } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
               <div className='location'>
                 <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}} />
                 <div>
                 <p>Maryland, Lagos</p>
                 <p>Nigeria</p>
                 </div>
               </div>
               <div className='phone'>
                <h4>
                    <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}} />
                    234-903-237-0716
                </h4>
               
               </div>
               <div className='phone'>
                <h4>
                <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}} />
                valentinabuoro4@gmail.com
              
                </h4>
               
               </div>


            </div>
            <div className='right'>
                <h4>
                    About Me
                </h4>
                <p>
                    I am a passionate frontend engineer that is committed to
                     providing business solutions for your company
                </p>
                <div className='social' style={{'marginTop':'2rem'}}>
                <a href='https://github.com/queen-x-vee'><FaGithub size={30} style={{color:'#fff', marginRight:'2rem'}} /></a>
                <a href='https://twitter.com/omose_B'><FaTwitter size={30} style={{color:'#fff', marginRight:'2rem'}} /></a>
                <a href='https://linkedin.com/in/valentina-buoro'><FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}} /></a>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer
