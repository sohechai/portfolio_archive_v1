import Home from './components/Home'
import './styles/style.scss'
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom"
import About from './pages/About';
import Work from './pages/Work';
import NavBar from './components/NavBar';
import logo from './images/logo.svg'
import { useState, useEffect } from 'react';
import { ThemeContext, themes } from './components/contexts/themeContext';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import LightModeIcon from '@mui/icons-material/LightMode';
import Contact from './pages/Contact';
import { motion } from 'framer-motion'

function App() {
	const [darkMode, setDarkMode] = useState(true);
	
	return (
		<BrowserRouter>
			<section className='container'>
				<section className='header'>
					<NavLink to="/">
						<img src={logo} alt="" className='logo' />
					</NavLink>
					<div className='lightingMode'>
						<ThemeContext.Consumer>
							{({ changeTheme }) => (
								(darkMode ?
									<LightModeIcon onClick={() => {
										setDarkMode(!darkMode);
										changeTheme(darkMode ? themes.light : themes.dark);
									}} />
									:
									<NightsStayIcon onClick={() => {
										setDarkMode(!darkMode);
										changeTheme(darkMode ? themes.light : themes.dark);
									}}
									/>
								)
							)}
						</ThemeContext.Consumer>
					</div>
				</section>
				<NavBar />
				<section className='pageContents'>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="work" element={<Work />} />
						<Route path="contact" element={<Contact />} />
					</Routes>
					<div className='signature'>
						<p>&#169; designed and developed by Sofia Hechaïchi with ReactJS.</p>
					</div>
				</section>
			</section>
		</BrowserRouter>
	);
}

export default App;
