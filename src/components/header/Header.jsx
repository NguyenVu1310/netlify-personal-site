import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5> Hello I'm</h5>
                <h1>Nguyen Tan Vu</h1>
                <h5 className="text-light">Fresher Security Engineer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll Downs</a>
            </div>
        </header>
    )
}

export default header