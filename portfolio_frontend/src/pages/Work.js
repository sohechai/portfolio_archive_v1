import React from 'react'
import WorkPresentation from '../components/WorkPresentation'
import '../styles/work.scss'
import portfolio from '../images/portfolio.png'

function Work() {
  return (
	<section className='workContainer'>
		<h1>My work</h1>
		<div className='workSquares'>
			<WorkPresentation image={portfolio} description="My personnal portfolio v.1.0" abilities="react" link="http://localhost:3000"/>
		</div>
	</section>
  )
}

export default Work