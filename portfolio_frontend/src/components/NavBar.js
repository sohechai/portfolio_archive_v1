import React from 'react'
import '../styles/navbar.scss'
import { NavLink } from "react-router-dom"

function NavBar() {

	return (
		<section className='navbar'>
			<NavLink
				to="/about"
				className={({ isActive }) => (isActive ? 'bubble active' : 'bubble inactive')}
			>
				<span>About</span>
			</NavLink>
			<NavLink
				to="/work"
				className={({ isActive }) => (isActive ? 'bubble active' : 'bubble inactive')}
			>
				<span>Work</span>
			</NavLink>
			<NavLink
				to="/Contact"
				className={({ isActive }) => (isActive ? 'bubble active' : 'bubble inactive')}
			>
				<span> Contact</span>
			</NavLink>
		</section>
	)
}

export default NavBar
