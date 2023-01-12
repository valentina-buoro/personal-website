import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {  Hamburger } from './Header.styled'
import { FaTimes, FaBars } from 'react-icons/fa'
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
            <Link to='/' >
                <h1>big teenz </h1>
            </Link>
            
            
                <ul className={show? 'nav-menu active': 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                </ul>

            


            <Hamburger onClick={handleClick}>
                {show ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </Hamburger>
        </div>
    )
}



export default Navbar