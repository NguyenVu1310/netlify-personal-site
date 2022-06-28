import React from 'react'
import './contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'
import { TbBrandLinkedin } from 'react-icons/tb'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s40ojcs', 'template_eh9sppo', form.current, 'Kg2rhkR8J5TfgshRJ')

        e.target.reset()

            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>tanvunguyen2205@gmail.com</h5>
                        <a href="mailto:tanvunguyen2205@gmail.com" target="_blank">Send a message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Nguyen Vu</h5>
                        <a href="https://m.me/vunguyen260803.trying" target="_blank" >Send a message</a>
                    </article>

                    <article className="contact__option">
                        <TbBrandLinkedin className='contact__option-icon' />
                        <h4>Linkedin</h4>
                        <h5>Nguyen Vu</h5>
                        <a href="https://www.linkedin.com/in/nguyenvu2608/" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* End of contact options */}

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Raymond Rhodes' required />
                    <input type="email" name='email' placeholder='example@example.com' required />
                    <textarea name='message' rows="7" placeholder='Hi Vu, I have a question...' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact