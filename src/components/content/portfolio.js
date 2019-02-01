import React from 'react'

import ecommerce from '../../images/ecommerce.jpg'
import financial from '../../images/financial-app.jpg'
import teletón from '../../images/teleton.jpg'
import blockchain from '../../images/idapp.jpg'
import registro from '../../images/registro.jpg'
import Kmimos from '../../images/Kmimos.jpg'

const works = [
	{
		title: "psum magdalena dolor. Siéntate amet superando a los osos gummi.",
		link: "https://app.powerbi.com/view?r=eyJrIjoiOTZlNTBkZTctNDUxMS00NTFiLThhZTYtMzFhODI5MjgzYmQ4IiwidCI6IjA2ZDdlNTFiLTU4M2MtNDA4ZC05ZDY3LTQyNzI3YzcwM2NlNCIsImMiOjR9&pageName=ReportSection",
		sites: "https://sites.google.com/view/tortura-en-mexico/home",
		img: financial,
	},
	{
		title: "psum magdalena dolor. Siéntate amet superando a los osos gummi.",
		link: "https://app.powerbi.com/view?r=eyJrIjoiOTZlNTBkZTctNDUxMS00NTFiLThhZTYtMzFhODI5MjgzYmQ4IiwidCI6IjA2ZDdlNTFiLTU4M2MtNDA4ZC05ZDY3LTQyNzI3YzcwM2NlNCIsImMiOjR9&pageName=ReportSection",
		sites: "https://sites.google.com/view/tortura-en-mexico/home",
		img: ecommerce,
	},
	{
		title: "psum magdalena dolor. Siéntate amet superando a los osos gummi.",
		link: "https://app.powerbi.com/view?r=eyJrIjoiOTZlNTBkZTctNDUxMS00NTFiLThhZTYtMzFhODI5MjgzYmQ4IiwidCI6IjA2ZDdlNTFiLTU4M2MtNDA4ZC05ZDY3LTQyNzI3YzcwM2NlNCIsImMiOjR9&pageName=ReportSection",
		sites: "https://sites.google.com/view/tortura-en-mexico/home",
		img: teletón,
	},
	{
		title: "psum magdalena dolor. Siéntate amet superando a los osos gummi.",
		link: "https://app.powerbi.com/view?r=eyJrIjoiOTZlNTBkZTctNDUxMS00NTFiLThhZTYtMzFhODI5MjgzYmQ4IiwidCI6IjA2ZDdlNTFiLTU4M2MtNDA4ZC05ZDY3LTQyNzI3YzcwM2NlNCIsImMiOjR9&pageName=ReportSection",
		sites: "https://sites.google.com/view/tortura-en-mexico/home",
		img: blockchain,
	},
	{
		title: "psum magdalena dolor. Siéntate amet superando a los osos gummi.",
		link: "https://app.powerbi.com/view?r=eyJrIjoiOTZlNTBkZTctNDUxMS00NTFiLThhZTYtMzFhODI5MjgzYmQ4IiwidCI6IjA2ZDdlNTFiLTU4M2MtNDA4ZC05ZDY3LTQyNzI3YzcwM2NlNCIsImMiOjR9&pageName=ReportSection",
		sites: "https://sites.google.com/view/tortura-en-mexico/home",
		img: registro,
	},
	{
		title: "Siéntate amet superando a los osos gummi.",
		link: "https://app.powerbi.com/view?r=eyJrIjoiOTZlNTBkZTctNDUxMS00NTFiLThhZTYtMzFhODI5MjgzYmQ4IiwidCI6IjA2ZDdlNTFiLTU4M2MtNDA4ZC05ZDY3LTQyNzI3YzcwM2NlNCIsImMiOjR9&pageName=ReportSection",
		sites: "https://sites.google.com/view/tortura-en-mexico/home",
		img: Kmimos,
	},
]

const Portfolio = () => (
	<div className="portfolio">
		<header>
			<h3>Datos</h3>
		</header>
		{ works.map((work) => (
			<div key={work.title}>
				<a className="img" href={work.link} target="_blank" rel="noopener noreferrer">
					<img src={work.img} alt={work.title} />
					<span>{work.title}</span>
				</a>
				<a className="site" href={work.sites} target="_blank" rel="noopener noreferrer">mas info</a>
			</div>
		)) }
  </div>
)

export default Portfolio
