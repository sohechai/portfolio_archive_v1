import React, { useState } from 'react'
import '../styles/contact.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function Contact() {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const handleOpen2 = () => setOpen2(true);
	const handleClose2 = () => setOpen2(false);
	const style = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: '#2c2f33',
		borderRadius: '10px',
		textAlign: 'center',
		boxShadow: 24,
		outline: 0,
		p: 4,
	};

	return (
		<section className='contactContainer'>
			<h1>CONTACT ME</h1>
			<div className='footIcons'>
				<h1>FIND ME ON</h1>
				<br />
				<a href="https://www.linkedin.com/in/sofia-hechaichi/" target="_blank" rel="noreferrer">
					<LinkedInIcon />
				</a>
				<a href="https://github.com/sohechai" target="_blank" rel="noreferrer">
					<GitHubIcon />
				</a>
				<br />
				<button onClick={handleOpen}>
					<MailIcon />
				</button>
				<Modal
					open={open}
					onClose={handleClose}
					disableEnforceFocus
				>
					<Box sx={style}>
						sofia.hechaichi@gmail.com
					</Box>
				</Modal>
				<button onClick={handleOpen2}>
					<LocalPhoneIcon />
				</button>
				<Modal
					open={open2}
					onClose={handleClose2}
					disableEnforceFocus
				>
					<Box sx={style}>
						(+33)06 10 39 63 07
					</Box>
				</Modal>
			</div>
		</section>
	)
}

export default Contact