import React, { useState } from 'react'
import {  Hamburger } from './Header.styled'
import { FaTimes, FaBars } from 'react-icons/fa'
import Valentina from './valentinaBuoro.png'
 import '../Header/Header.css'

const Navbar = () => {
    const [show, setShow] = useState(false)
    function handleClick() {
        setShow(!show)
    }
    const [color, setColor] = useState(false)
    function changeColor(){
        if(window.scrollY >= 100){
            setColor(true)
        }else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)

    return (
        <div className={color?  ' header header-bg': 'header'}>
            <a href='#home' >
                
                <div>
                    <img src={Valentina} alt='val' width={80} height={80} />
                </div>
            </a>
            
            
                <ul className={show? 'nav-menu active': 'nav-menu'}>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                
                <li>
                    <a href='#contact'>Contact</a>
                </li>
                </ul>

            


            <Hamburger onClick={handleClick}>
                {show ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </Hamburger>
        </div>
    )
}



export default Navbar