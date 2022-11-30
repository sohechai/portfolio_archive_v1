import React from 'react'
import '../styles/work.scss'

function WorkPresentation({ image, description, abilities, link }) {
	const abilitiesSep = abilities.split(" ");

	return (
		<div className='workPresentation'>
			<div className='imageDiv'>
				<img src={image} alt="" />
			</div>
			<div className='abilities'>
				{
					abilitiesSep.map( (item) =>
						<h1 key={item}>{item}</h1> )
				}
			</div>
			<p>{description}</p>
			<a href={link} target="_blank" rel="noreferrer">
				<p>view website</p>
			</a>
		</div>
	)
}

export default WorkPresentation