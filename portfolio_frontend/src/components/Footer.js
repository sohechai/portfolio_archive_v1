import React from 'react'
import '../styles/style.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
	return (
		<section className='footerContainer'>
			<div className='footIcons'>
			<h1>FIND ME ON</h1>
				<a href="https://www.linkedin.com/in/sofia-hechaichi/" target="_blank" rel="noreferrer">
					<LinkedInIcon />
				</a>
				<a href="https://github.com/sohechai" target="_blank" rel="noreferrer">
					<GitHubIcon />
				</a>
			</div>
		</section>
	)
}

export default Footer