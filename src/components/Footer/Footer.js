import React from 'react'
import '../Footer/FooterStyles.css'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
               <div className='location'>
                 <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}} />
                 <div>
                 <p>123, Housing Society</p>
                 <p>Bangladesh</p>
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
                <div className='social'>
                <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}} />
                <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}} />
                <FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}} />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer