import React from 'react'
import '../styles/style.scss'
import { NavLink } from "react-router-dom"

function NavBar() {

	return (
		<section>
			<div className="navbar">
				<div className='bubble'>
				<NavLink
					to="/about"
					className={( {isActive} ) => (isActive ? 'bubble active' : 'bubble inactive')}
				>
					about
				</NavLink>
				</div>
				<div className='bubble'>
				<NavLink
					to="/skills"
					className={( {isActive} ) => (isActive ? 'bubble active' : 'bubble inactive')}
				>
				skills
				</NavLink>
				</div>
				<div className='bubble'>
				<NavLink
					to="/work"
					className={( {isActive} ) => (isActive ? 'bubble active' : 'bubble inactive')}
				>
					work
				</NavLink>
				</div>
			</div>
		</section>
	)
}

export default NavBar
