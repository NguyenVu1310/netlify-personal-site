import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import { FaAward } from 'react-icons/fa'
import { TbCertificate } from 'react-icons/tb'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Me Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Level</h5>
                            <small>Fresher</small>
                        </article>

                        <article className='about__card'>
                            <TbCertificate className='about__icon' />
                            <h5>Certificate</h5>
                            <small>+20 Certificate</small>
                        </article>

                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>+4 Completed</small>
                        </article>
                    </div>

                    <p>
                        I am a cautious and perfectionist person. Desire to be a member of the Pentest Team. In the next 5 years,
                        I will be a Professional Pentester and have CEH, and CISSP certificates. I own 20 certificates from online
                        learning platforms like Coursera, Hackerrank, TryHackMe, Cisco... and a few soft skills certificates.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About