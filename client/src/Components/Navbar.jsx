import React from 'react';
import useDarkMode from '../Hooks/useDarkMode';
import logo from '../logo.svg';

const Navbar = () => {
	const [ darkMode, setDarkMode ] = useDarkMode(false);
	const toggleMode = (e) => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<header className='App-header'>
			<nav className='navbar'>
				<div className='topbar'>
					<img src={logo} className='App-logo' alt='logo' />
					<div className='dark-mode__toggle'>
						<div onClick={toggleMode} className={darkMode ? 'toggle toggled' : 'toggle'} />
					</div>
				</div>
				<h1>Women's World Cup Players</h1>
			</nav>
		</header>
	);
};

export default Navbar;
