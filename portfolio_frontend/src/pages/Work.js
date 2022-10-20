import React from 'react'
import WorkPresentation from '../components/WorkPresentation'
import '../styles/work.scss'
import project2 from '../images/Project2.jpg'
import portfolio from '../images/portfolio.png'

function Work() {
	console.log(portfolio)
  return (
	<section className='workContainer'>
		<h1>My work</h1>
		<div className='workSquares'>
			<WorkPresentation image={portfolio} description="My personnal portfolio v.1.0" abilities="react nestjs" link="http://localhost:3000"/>
		</div>
	</section>
  )
}

export default Work