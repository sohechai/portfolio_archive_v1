import React from 'react'
import WorkPresentation from '../components/WorkPresentation'
import '../styles/work.scss'
import arcaneImage from '../images/arcaneProject.png'

function Work() {
	console.log(arcaneImage)
  return (
	<section className='workContainer'>
		<h1>My work</h1>
		<div className='workSquares'>
			<WorkPresentation image={arcaneImage} description="Personnal Arcane project from Netflix" abilities="react" />
			<WorkPresentation image={arcaneImage} description="Personnal Arcane project from Netflix" abilities="react nestjs" />
			<WorkPresentation image={arcaneImage} description="Personnal Arcane project from Netflix" abilities="react nestjs" />
			<WorkPresentation image={arcaneImage} description="Personnal Arcane project from Netflix" abilities="react nestjs" />
			<WorkPresentation image={arcaneImage} description="Personnal Arcane project from Netflix" abilities="react nestjs" />
			<WorkPresentation image={arcaneImage} description="Personnal Arcane project from Netflix" abilities="react nestjs" />

		</div>
	</section>
  )
}

export default Work