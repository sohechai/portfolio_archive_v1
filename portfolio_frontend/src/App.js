import Home from './components/Home'
import './styles/style.scss'
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom"
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import NavBar from './components/NavBar';
import logo from './images/logo.png'
import { useState } from 'react';
import { ThemeContext, themes } from './components/contexts/themeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';


function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<BrowserRouter>
		<Routes>
			<Route path="/" exact element={<Home />}/>
			<Route path="about" element={<About />} />
			<Route path="skills" element={<Skills />} />
			<Route path="work" element={<Work />} />
		</Routes>
			<NavLink to="/">
					<img src={logo}  alt="" className='logo'/>
			</NavLink>
			<ThemeContext.Consumer>
            {({ changeTheme }) => (
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
				<DarkModeIcon />
                {/* <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span className="d-lg-none d-md-block">Switch mode</span> */}
              </button>
            )}
          </ThemeContext.Consumer>
			<NavBar />
		</BrowserRouter>
	);
}

export default App;
