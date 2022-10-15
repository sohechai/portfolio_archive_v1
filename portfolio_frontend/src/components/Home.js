import React from 'react'
import '../styles/style.scss'
import video from '../images/videoBoxHome.mp4'

function Home() {
	return (
		<section className='home'>
			<div className='text'>
			<h1>
				Hello, I’m Sofia.
			</h1>
			<h1 className='typewrite-effect'>
				I’m a web <span style={{color: '#D3ADDC'}}>&#60; developer /&#62;</span> .
			</h1>
			</div>
			<div className='hello'>
				<div className='box'>
					<h1>nice to meet you !</h1>
				</div>
				<div className='videoContainer'>
					<video src={video} autoPlay loop muted />
				</div>
			</div>
		</section>
	)
}

export default Home
