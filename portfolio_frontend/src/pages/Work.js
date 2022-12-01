import React from 'react'
import WorkPresentation from '../components/WorkPresentation'
import '../styles/work.scss'
import portfolio from '../images/portfolio.png'
import pomodoro from '../images/pomodoroWorkPresentation.png'

function Work() {
  return (
	<section className='workContainer'>
		<h1>My work</h1>
		<div className='workSquares'>
			<WorkPresentation image={portfolio} description="My personnal portfolio v.1.0" abilities="reactJS" link="https://sofiahechaichi.vercel.app/"/>
			<WorkPresentation image={pomodoro} description="A pomodoro application to increase your productivity" abilities="reactJS" link="https://pomodoro-sohechai.vercel.app/"/>
		</div>
	</section>
  )
}

export default Work