import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Title, Subtitle, Text, Button, Alert } from '../../components'

import arroba from '../../../assets/auth/mail.png'
import padlock from '../../../assets/auth/padlock.png'

import useAuth from '../../../hooks/useAuth'

import './Auth.scss'

const marginTop = { marginTop: 16 }

const Login = () => {

	const navigate = useNavigate()

	const { setAuth } = useAuth();

	const [datos, setDatos] = useState({
		email: '',
		password: '',
	})
	const { email, password } = datos

	const [alerta, setAlerta] = useState({})
	const { msg } = alerta

	const [showModal, setShowModal] = useState('')

	// const { isLoading, isError, data, callApi } = usePostLogin()

	const hideAlert = () => setAlerta({
		msg: '',
		error: false
	})

	// useEffect(() => {
	// 	if (isError) {
	// 		setAlerta({
	// 			msg: 'Ocurrió un error, verificá si ingresaste correctamente los datos',
	// 			error: true
	// 		});
	// 	} else if (!isLoading && data) {
	// 		localStorage.setItem('bdd2-token', data.token)
	// 		setAuth(data)
	// 	}
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [data, isLoading, isError])

	const handleLogin = async e => {

		e.preventDefault();

		if ([email, password].includes('')) {
			setAlerta({
				msg: 'Todos los campos son obligatorios',
				error: true
			});
			return
		}

		try {

			setAlerta({})

			// callApi({ email, password })

		} catch (error) {
			setAlerta({
				msg: error.response.data.msg,
				error: true
			})
		}

	}

	// if (isLoading) {
	// 	return (
	// 		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }}>
	// 			<Loading />
	// 		</div>
	// 	)
	// }

	return (

		<form className="form">

			<Title
				label='Consultoría TPO'
				color='primary'
				isBold
				style={{ marginTop: 8, marginBottom: 8 }}
			/>

			<Subtitle
				label='Login'
				isCenter
				style={{ marginTop: 8, marginBottom: 8 }}
			/>

			<Text
				label='Email'
				isBold
				style={marginTop}
			/>

			<div className="inputForm">

				<img
					src={arroba}
					alt='arroba-login'
					className='auth-logo'
				/>

				<input
					className="input"
					placeholder="Ingresá tu email"
					type="email"
					value={email}
					onChange={(e) => {
						hideAlert()
						setDatos({ ...datos, email: e.target.value })
					}}
				/>

			</div>

			<Text
				label='Contraseña'
				isBold
				style={marginTop}
			/>

			<div className="inputForm">

				<img
					src={padlock}
					alt='padlock-login'
					className='auth-logo'
				/>

				<input
					className="input"
					placeholder="Ingresá tu contraseña"
					type="password"
					value={password}
					autoComplete='current-password'
					onChange={(e) => {
						hideAlert()
						setDatos({ ...datos, password: e.target.value })
					}}
				/>

			</div>

			{
				msg && (
					<Alert alerta={alerta} />
				)
			}

			<Button
				label='Ingresar'
				onClick={handleLogin}
				theme='primary'
				fullWidth
				isBold
				style={marginTop}
			/>

			<p className="p mt1">
				No tenés cuenta?<button className='sign-up-email' onClick={() => navigate('/auth/sign-up')}>Registrate con tu email</button>
			</p>

		</form>

	)
}

export default Login