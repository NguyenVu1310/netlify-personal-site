import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { ImBlogger2 } from 'react-icons/im'
import { RiDiscordLine } from 'react-icons/ri'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/nguyenvu2608/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/nguyenvu1310" target="_blank"><FaGithub /></a>
            <a href="http://nguyenvu1310.github.io/" target="_blank"><ImBlogger2 /></a>
            <a href="https://discord.gg/JCRHvtD7" target="_blank"><RiDiscordLine /></a>
        </div>
    )
}

export default HeaderSocials