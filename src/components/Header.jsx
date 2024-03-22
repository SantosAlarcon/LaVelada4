import React from 'react'
import "../styles/Header.css"

const Header = () => {
	return (
		<header className='header__container'>
			<nav className="header__nav">
				<img className="header__nav__logo" src="/Logo.webp" alt="Logo de La Velada" />
				<ul className="header__nav__links">
					<li className="header__nav__link">Boxeadores</li>
					<li className="header__nav__link">Artistas</li>
					<li className="header__nav__link">Entradas</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
