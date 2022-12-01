import React, { useState } from 'react'
import '../styles/contact.scss'
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

function Contact() {
	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	const { name, email, message } = e.target.elements;
	// 	let details = {
	// 		name: name.value,
	// 		email: email.value,
	// 		message: message.value,
	// 	};

	// 	axios.post('http://localhost:4000/mail/send-email', { name: details.name, email: details.email, message: details.message })
	// 		.then((res) =>
	// 			toast("message sent, thank you !",
	// 				{
	// 					icon: '✅',
	// 					style: {
	// 						borderRadius: '10px',
	// 						background: '#333',
	// 						color: '#fff',
	// 					},
	// 				}
	// 			)
	// 		)
	// 		.catch((error) =>
	// 			toast("error, please check your email address.",
	// 				{
	// 					icon: '❌',
	// 					style: {
	// 						borderRadius: '10px',
	// 						background: '#333',
	// 						color: '#fff',
	// 					},
	// 				}
	// 			)
	// 		);
	// };

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
			{/* <Toaster /> */}
			<h1>CONTACT ME</h1>
			{/* <form onSubmit={handleSubmit}>
				<div className='formDiv'>
					<label htmlFor="name" />
					<input placeholder='Name' type="text" id="name" required />
				</div>
				<div className='formDiv'>
					<label htmlFor="email" />
					<input placeholder='Email' type="email" id="email" required />
				</div>
				<div className='formDiv'>
					<label htmlFor="message" />
					<textarea placeholder='Message' id="message" required />
				</div>
				<button type="submit">send</button>
			</form> */}
			{/* <Footer /> */}
			<section className='footerContainer'>
			<div className='footIcons'>
				<h1>FIND ME ON</h1>
				<br />
				<a href="https://www.linkedin.com/in/sofia-hechaichi/" target="_blank" rel="noreferrer">
					<LinkedInIcon />
				</a>
				<a href="https://github.com/sohechai" target="_blank" rel="noreferrer">
					<GitHubIcon />
				</a>
				<br/>
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
		</section>
	)
}

export default Contact