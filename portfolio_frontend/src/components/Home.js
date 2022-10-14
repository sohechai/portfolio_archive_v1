import React from 'react'
import '../styles/style.scss'
import video from '../images/videoBoxHome.png'

function Home() {
	return (
		<section className="home">
			<div className='hello'>
				<h1>
					Hello, I’m Sofia. <br/>
					I’m a web &#60; developper /&#62; .
				</h1>
				<div className='box'>
					<h1>nice to meet you !</h1>
				</div>
				<div className='videoContainer'>
					<img src={video} alt=""/>
				</div>
			</div>
		</section>
	)
}

export default Home
