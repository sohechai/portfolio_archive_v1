import React from 'react'
import '../styles/work.scss'

function WorkPresentation({ image, description, abilities }) {
	const abilitiesSep = abilities.split(" ");

	return (
		<div className='workPresentation'>
			<img src={image} alt="" />
			<div className='abilities'>
				{
					abilitiesSep.map( (item) =>
						<h1>{item}</h1> )
				}
			</div>
			<p>{description}</p>
			<a href="https://google.com" target="_blank" rel="noreferrer">
				<p>view website</p>
			</a>
		</div>
	)
}

export default WorkPresentation