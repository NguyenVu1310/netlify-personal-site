import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//Do not use the images in production
const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Personal Blog Website uses Jekyll (is a static site generator) and is hosted on Github.',
        github: 'https://github.com/NguyenVu1310/NguyenVu1310.github.io',
        demo: 'https://nguyenvu1310.github.io/',
    },
    {
        id: 2,
        image: IMG2,
        title: 'My Personal Portfolio Website uses React and is deployed on Netlify.',
        github: 'https://github.com/nguyenvu1310',
        demo: 'https://github.com/nguyenvu1310',
    },
    {
        id: 3,
        image: IMG3,
        title: 'agagdf ag aga asga a a ag',
        github: 'https://github.com/nguyenvu1310',
        demo: 'https://github.com/nguyenvu1310',
    },
    {
        id: 4,
        image: IMG4,
        title: 'agagdf ag aga asga a a ag',
        github: 'https://github.com/nguyenvu1310',
        demo: 'https://github.com/nguyenvu1310',
    },
]


const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Projects</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio