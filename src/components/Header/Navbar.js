import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledNav, Nav, Hamburger,  } from './Header.styled'
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
        <StyledNav className={color?  'header-bg': ''}>
            <Link to='/' >
                <h1>big teenz </h1>
            </Link>
            
            <Nav >
                <ul className={show? 'nav-active': 'nav'}>
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
                    <Link to='/blog'>Blog</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                </ul>

            </Nav>


            <Hamburger onClick={handleClick}>
                {show ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </Hamburger>
        </StyledNav>
    )
}



export default Navbar