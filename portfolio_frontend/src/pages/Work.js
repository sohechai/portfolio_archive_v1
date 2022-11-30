import React from 'react'
import WorkPresentation from '../components/WorkPresentation'
import '../styles/work.scss'
import portfolio from '../images/portfolio.png'

function Work() {
  return (
	<section className='workContainer'>
		<h1>My work</h1>
		<div className='workSquares'>
			<WorkPresentation image={portfolio} description="My personnal portfolio v.1.0" abilities="react" link="https://sofiahechaichi.vercel.app/"/>
		</div>
	</section>
  )
}

export default Work