import React from 'react'
import '../styles/navbar.scss'
import { NavLink } from "react-router-dom"

function NavBar() {

	return (
		<section className='navbar'>
			<div className='bubble'>
				<NavLink
					to="/about"
					className={({ isActive }) => (isActive ? 'bubble active' : 'bubble inactive')}
				>
					ABOUT
				</NavLink>
			</div>
			<div className='bubble'>
				<NavLink
					to="/work"
					className={({ isActive }) => (isActive ? 'bubble active' : 'bubble inactive')}
				>
					WORK
				</NavLink>
			</div>
			<div className='bubble'>
				<NavLink
					to="/Contact"
					className={({ isActive }) => (isActive ? 'bubble active' : 'bubble inactive')}
				>
					CONTACT
				</NavLink>
			</div>
		</section>
	)
}

export default NavBar
