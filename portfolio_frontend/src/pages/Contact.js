import React from 'react'
import '../styles/contact.scss'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, message } = e.target.elements;
		let details = {
			name: name.value,
			email: email.value,
			message: message.value,
		};

		axios.post('http://localhost:4000/mail/send-email', { name: details.name, email: details.email, message: details.message })
			.then((res) =>
				toast("message sent, thank you !",
					{
						icon: '✅',
						style: {
							borderRadius: '10px',
							background: '#333',
							color: '#fff',
						},
					}
				)
			)
			.catch((error) =>
				toast("error, please check your email address.",
					{
						icon: '❌',
						style: {
							borderRadius: '10px',
							background: '#333',
							color: '#fff',
						},
					}
				)
			);
	};

	return (
		<section className='contactContainer'>
			<Toaster />
			<h1>CONTACT ME</h1>
			<form onSubmit={handleSubmit}>
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
			</form>
		</section>
	)
}

export default Contact