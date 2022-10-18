import React from 'react'
import '../styles/style.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<section className='footerContainer'>
			<div className='footIcons'>
				<div className='line' />
				<a href="https://www.linkedin.com/in/sofia-hechaichi/" target="_blank" rel="noreferrer">
					<LinkedInIcon />
				</a>
				<a href="https://github.com/sohechai" target="_blank" rel="noreferrer">
					<GitHubIcon />
				</a>
				<NavLink to="/Contact">
					<MailIcon />
				</NavLink>
				<div className='line' />
			</div>
		</section>
	)
}

export default Footer