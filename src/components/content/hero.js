import React from 'react'

import Carcel from '../../images/Carcel.jpg'

const Hero = () => {
	const scrollToContact = () => document.querySelector('.contact').scrollIntoView({ block: "start", behavior: "smooth" });
	const scrollToPortfolio = () => document.querySelector('.portfolio').scrollIntoView({ block: "start", behavior: "smooth" });
  return (
    <div className="hero">
      <header>
        <picture>
					<img src={Carcel} alt="Tortura en México | UX" />
        </picture>
        <h1>psum magdalena dolor.</h1>
        <h2>Siéntate amet superando a los osos gummi. Helado tiramisú gomitas galleta galleta.</h2>
      </header>
      <nav>
        <a href="https://www.linkedin.com/in/amelia-estrada/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a>
        <a href="https://github.com/rxmstrd?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt" /></a>
        <a onClick={scrollToContact}><i className="far fa-envelope" /></a>
			</nav>
			<aside>
				<a onClick={scrollToContact}>Contacto</a>
				<a onClick={scrollToPortfolio}>Portafolio</a>
			</aside>
    </div>
  )
}

export default Hero
