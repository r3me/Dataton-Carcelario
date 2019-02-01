import React from 'react'

const Bio = () => {

  const jobs = [
    {
      title: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.",
      description: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.´",
      activity: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.",
      date: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah."
    },
    {
      title: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.",
      description: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.",
      activity: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.",
      date: "2018"
    },
      {
      title: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.",
      description: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.",
      activity: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah.",
      date: "Chocolate del pastel de queso de la torta de la zanahoria de la melcocha de Halvah."
    },
    // {
    //   title: "Palíndromos Sociedades Igualitarias SC",
    //   description: "Proyecto 'Análisis cultural de los apoyos de PROSPERA en el desarrollo de hogares beneficiados': Investigadora Jr. Entrevistas estructuradas, Etnografía, Análisis de información obtenida. ",
    //   date: "Durango 2017-2018"
    // },
    // {
    //   title: "Freelance",
    //   description: "Como Freelance he colaborado en evaluaciones del Suburbano, Auditoría en las Elecciones, Proyectos Académicos como CIDE 'México, las Américas y el mundo' entre otros, para diversas consultoras.",
    //   date: "desde 2016 a la fecha"
    // },
  ]

  // const tech = [
  //   {
  //     title: "Hackathon Teletón",
  //     description: "Proyecto 'ConfíaT': Web enfocada a transparecia de datos y recuperación de información de donantes anónimos.",
  //     link: "https://github.com/rxmstrd/hackathonTeleton",
  //     date: "Octubre 2018"
  //   },
  //   {
  //     title: "Hackathon Blockchain",
  //     description: "Proyecto 'ID App': Aplicación para generación de Identidad Digital para personas Migrantes y Refugiadas. ",
  //     link: "https://github.com/rxmstrd/1-1-1-identity-frontend-i",
  //     date: "Septiembre 2018"
  //   },
  //   {
  //     title: "Workshop City Banamex",
  //     description: "Proyecto 'City Kanban': Tablero Kanban para Product Manager.",
  //     link: "https://github.com/rxmstrd/citi-kanban",
  //     date: "Agosto 2018"
  //   },
	// ]

	const skills = [
		{
			icon: "fas fa-pen-fancy",
			title: "Prototyping",
			items: ["Sketch", "Marvel", "Figma"]
		},
		{
			icon: "fas fa-lightbulb",
			title: "Planeación",
			items: ["Ideación de Proyectos", "Empaty Map", "Map Journey"]
		},
		{
			icon: "fas fa-id-card",
			title: "Análisis",
			items: ["User Persona", "Research", "Análisis de Data"]
		},
		{
			icon: "fas fa-code",
			title: "Desarrollo",
			items: ["HTML", "CSS", "Javascript"]
		},
	]

  const experiencia = jobs.map((job) => (
    <div key={job.title}>
      <h4>{job.title}</h4>
      <p>{job.description}</p>
      <p>{job.activity}</p>
      <b>{job.date}</b>
    </div>
  ))

  // const proyectos = tech.map((proyect) => (
  //   <div key={proyect.title}>
  //     <h4>{proyect.title}</h4>
  //     <p>{proyect.description}</p>
  //     <b>{proyect.date}</b>
  //     <a href={proyect.link} target="_blank" rel="noopener noreferrer">
  //       <i className="fab fa-github-alt" />
  //     </a>
  //   </div>
  // ))

//   <article>
//   <h3>Proyectos Tech</h3>
//   <section className="bio--tech">
//     {proyectos}
//   </section>
// </article>

  const habilidades = skills.map((skill) => (
		<div key={skill.title}>
			<span><i className={skill.icon} /></span>
			<h4>{skill.title}</h4>
			<div>
				{skill.items.map((item) => <p key={item}>{item}</p>)}
			</div>
		</div>
	))

  return (
    <div className="bio">
      <header>
        <h3>Antecedentes.</h3>
        <p>Macarrones de regaliz dulce rollo brownie de frutas. Caramelo dulce oblea chupa chups helado pasteles pastel de manzana pastel de zanahoria pastelería. Sesame snaps jelly-o polvo sésamo snaps halvah. Gotas de limón, pan de jengibre, cupcake, gotas de limón, gelatina, chocolate, danés. Pastel de avena tootsie roll chupa chups. Melcocha Tootsie Rollo Sésamo Broches De Avena Torta De Postre Dulces Bastones Muffin De Zanahoria Pastel De Hielo. Caramelo de jengibre y ciruela. Lollipop de algodón de azúcar danés. Algodón dulce rollo dulce bastones de caramelo postre azúcar ciruela tootsie rollo gotas de limón. Dulce azúcar ciruela dragée halvah dragée jujubes pudín.</p>
				<p>Soufflé barra de chocolate paleta jalea-o pastel de avena regaliz. Oso de la magdalena soufflé brownie piruleta. Azúcar, caramelo, ciruela, gelatina, oso, garra, gelatina, dulce de galletas. Pastelería tootsie rollo galletas galletas pastelería rosquilla muffin. Relleno de pudín con cobertura de mazapán algodón de oblea. Regaliz galleta chocolate tootsie roll bastones de caramelo oso garra. Magdalena brownie caramelos pastel de avena malvavisco tarta de dragée. Azúcar helado de ciruela chupa chups muffin polvo pastelería jalea. Dona de malvavisco pastel de helado de oblea donut jalea-o.</p>
				<p>Tarta de avena con postre de ajonjolí y pudín. Tootsie roll cookie pudding jujubes tarta barra de chocolate glaseado. Polvo de hojaldre de pan de jengibre. Postre jujubes pastel de chocolate sésamo broches gummi osos barra de chocolate paleta. Tiramisu jelly beans dragée jelly beans gingerbread donut donut jujubes jujubes. Barra de chocolate en polvo soufflé. Jalea-o postre croissant caramelos de algodón de azúcar glas. Brownie oso garra toffee. Jujubes polvo magdalena chupa chups caramelos galleta galleta danesa.</p>
      </header>
      <article>
        <h3>Mexico</h3>
        <section className="bio--jobs">
          {experiencia}
        </section>
      </article>
      <article>
        <h3>Datos</h3>
				<section className="bio--skills">
					{habilidades}
				</section>
      </article>
    </div>
  )

}

export default Bio
