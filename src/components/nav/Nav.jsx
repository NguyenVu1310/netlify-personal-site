import React from 'react'
import './nav.css'
import { BiHomeHeart } from 'react-icons/bi'
import { BiUser } from 'react-icons/bi'
import { BiBookBookmark } from 'react-icons/bi'
import { HiDocumentDuplicate } from 'react-icons/hi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'



const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeHeart /></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBookBookmark /></a>
            <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><HiDocumentDuplicate /></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav