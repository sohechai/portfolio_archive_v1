import React from 'react'
import '../styles/about.scss'
import resumeFR from '../cv/CV_Sofia_Hechaichi.pdf'
import resumeEN from '../cv/CV_Sofia_Hechaichi_EN.pdf'

function About() {
	return (
		<section className='about'>
			<h1>About me</h1>
			<p>
				Ever since I can remember, I have always been fascinated by computers,
				playing video games and doing geeky things. However, life led me to pursue
				a career as a nurse.
				<br /><br />
				After two years, I decided to reorient my career and become a developer.
				In 2019, I enrolled in ecole 42, where my passion for creating websites
				with a keyboard truly began.
				<br /><br />
				This is why I am currently seeking an internship of 4 or 6 months as soon
				as possible. This opportunity will allow me to learn and grow with the guidance
				of experienced developers.
			</p>
			<a className='resume' href={resumeEN} download="resume_Sofia_Hechaichi_EN">RESUME (EN)</a>
			<a className='resume' href={resumeFR} download="resume_Sofia_Hechaichi_FR">RESUME (FR)</a>
		</section>
	)
}

export default About