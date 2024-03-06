import React from 'react'

const Header = () => {
	return (
		<header>
			<nav className="flex justify-between p-8 items-center">
				<img className="w-[92px] h-[92px]" src="/Logo.webp" alt="Logo de La Velada" />
				<ul className="flex gap-8 font-['Fugaz_One'] uppercase text-[#ff0] text-2xl drop-shadow-[0_0_8px_#ff0]">
					<li>Boxeadores</li>
					<li>Artistas</li>
					<li>Entradas</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
