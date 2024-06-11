import React, { useState, useEffect } from 'react';

import menuIco from '../../../assets/topbar/menu.png'

import closeIco from '../../../assets/topbar/close.png'

import useAuth from '../../../hooks/useAuth';

import { useNavigate } from 'react-router-dom'

import './Navbar.scss';

function Navbar() {

	const [click, setClick] = useState(false);

	const path = window.location.href

	const [showBackground, setShowBackground] = useState(false);

	const navigate = useNavigate()

	const { cerrarSesionAuth } = useAuth();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [path])

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 200) {
				setShowBackground(true);
			} else {
				setShowBackground(false);
			}
		});
	}, []);

	const handleClick = () => setClick(!click);

	const closeMobileMenu = () => setClick(false);

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};


	return (

		<div className={`fondo-navbar ${click ? 'open-menu' : ''} ${showBackground ? 'back-blue' : ''}`}>

			<div className='title-desktop-div'>

				<div onClick={() => scrollTop()} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
					<h1 className='title-desktop'>Consultancy Manager</h1>
				</div>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>

					<Item label="Home" closeMobileMenu={closeMobileMenu} onClick={() => navigate('/')} />

					<Item label="Perfil" closeMobileMenu={closeMobileMenu} onClick={() => navigate('/profile')} />

					<Item label="Mi negocio" closeMobileMenu={closeMobileMenu} onClick={() => navigate('/business')} />

					<Item label="Cerrar sesión" closeMobileMenu={closeMobileMenu} onClick={cerrarSesionAuth} />

				</ul>

			</div>

			<nav className={`navbar ${click ? 'open-menu' : ''}`}>

				<h1 className='title-mobile'>
					Consultancy Manager
				</h1>

				<div className='menu-icon' onClick={handleClick}>
					<img src={click ? closeIco : menuIco} alt='menu' className='menu-icon' />
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>

			</nav >

		</div>
	);
}

const Item = ({ label = '', closeMobileMenu = () => { }, elementRef, onClick = () => { } }) => {
	return (
		<button
			className='div-item'
			onClick={() => {
				closeMobileMenu()
				onClick()
			}}
		>
			<p className='texto'>{label}</p>
		</button>
	)
}

export default Navbar;
