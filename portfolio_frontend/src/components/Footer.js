import React from 'react'
import '../styles/style.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  return (
	<section className='footerContainer'>
		<div className='footIcons'>
			<GitHubIcon />
			<LinkedInIcon />
			<MailIcon />
		</div>
	</section>
  )
}

export default Footer