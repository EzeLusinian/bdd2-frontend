import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Title, Subtitle, Text, Button, Modal, Alert, Loading } from '../../components'

import userIco from '../../../assets/auth/user.png'
import arroba from '../../../assets/auth/mail.png'
import padlock from '../../../assets/auth/padlock.png'

// import usePostSignUp from '../../../services/auth/usePostSignUp'

import useAuth from '../../../hooks/useAuth'

import './Auth.scss'

const marginTop = { marginTop: 16 }

const SignUp = () => {

	const navigate = useNavigate()

	// const { data, isLoading, isError, callApi } = usePostSignUp()

	const { setAuth } = useAuth();

	const [alerta, setAlerta] = useState({
		msg: '',
		error: false
	})

	const [newUser, setNewUser] = useState(null)

	const [datos, setDatos] = useState({
		name: '',
		lastname: '',
		email: '',
		password: '',
		checkPassword: ''
	})

	const { name, lastname, email, password, checkPassword } = datos
	const { msg } = alerta

	// useEffect(() => {
	// 	if (isError) {
	// 		console.log(data)
	// 		if (data?.code === 'USE_OTHER_EMAIL') {
	// 			setAlerta({
	// 				msg: 'Este email ya está en uso.',
	// 				error: true
	// 			});
	// 		} else {
	// 			setAlerta({
	// 				msg: 'Ocurrió un error, por favor intentá más tarde',
	// 				error: true
	// 			});
	// 		}

	// 	} else if (!isLoading && data) {
	// 		setNewUser(data)
	// 	}
	// }, [data, isError, isLoading])

	const handleSignUp = async e => {

		e.preventDefault();

		if ([name, lastname, email, password, checkPassword].includes('')) {
			setAlerta({
				msg: 'Todos los campos son obligatorios',
				error: true
			})
			return
		}

		if (password !== checkPassword) {
			setAlerta({
				msg: 'Los contraseñas no son iguales',
				error: true
			})
			return
		}

		if (password.length < 6) {
			setAlerta({
				msg: 'La contraseña es muy corta, mínimo 6 caracteres',
				error: true
			})
			return
		}

		setAlerta({})

		try {

			// callApi({
			// 	name,
			// 	lastname,
			// 	email,
			// 	password,
			// })

		} catch (error) {
			setAlerta({
				msg: 'Ocurrió un error, por favor intentá más tarde',
				error: true
			});
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

			{
				(newUser) && (
					<Modal
						show={true}
						title='Nueva cuenta creada con éxito'
						closeButton={false}
					>
						<Text
							label='Tu cuenta ha sido creada con éxito. Si querés potenciar tu experiencia, te recomendamos validar tu cuenta a través del enlace que enviamos a tu correo.'
						/>
						<Text
							label='¡Nos alegra tenerte!'
						/>
						<Button
							label='Comencemos!'
							onClick={() => {
								localStorage.setItem('bdd2-token', newUser.token)
								setAuth(newUser)
							}}
							fullWidth
							isBold
							style={{ marginTop: 16 }}
						/>
					</Modal>
				)
			}

			<Title
				label='Consultoría TPO'
				color='primary'
				isBold
				style={{ marginTop: 8, marginBottom: 8 }}
			/>

			<Subtitle
				label='Sign Up'
				isCenter
				style={{ marginTop: 8, marginBottom: 8 }}
			/>

			<Text
				label='Nombre'
				isBold
				style={marginTop}
			/>
			<div className="inputForm">
				<img
					src={userIco}
					alt='name-signup'
					className='auth-logo'
				/>
				<input
					className="input"
					placeholder="Ingresá tu nombre"
					type="text"
					value={name}
					onChange={e => setDatos({ ...datos, name: e.target.value })}
				/>
			</div>

			<Text
				label='Apellido'
				isBold
				style={marginTop}
			/>
			<div className="inputForm">
				<img
					src={userIco}
					alt='lastname-signup'
					className='auth-logo'
				/>
				<input
					className="input"
					placeholder="Ingresá tu apellido"
					type="text"
					value={lastname}
					onChange={e => setDatos({ ...datos, lastname: e.target.value })}
				/>
			</div>

			<Text
				label='Email'
				isBold
				style={marginTop}
			/>

			<div className="inputForm">

				<img
					src={arroba}
					alt='arroba-signup'
					className='auth-logo'
				/>

				<input
					className="input"
					placeholder="Ingresá tu email"
					type="email"
					value={email}
					onChange={e => setDatos({ ...datos, email: e.target.value })}
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
					alt='padlock-signup'
					className='auth-logo'
				/>

				<input
					className="input"
					placeholder="Ingresá tu contraseña"
					type="password"
					autoComplete='new-password'
					value={password}
					onChange={e => setDatos({ ...datos, password: e.target.value })}
				/>

			</div>

			<Text
				label='Confirmar contraseña'
				isBold
				style={marginTop}
			/>

			<div className="inputForm">

				<img
					src={padlock}
					alt='padlock-signup'
					className='auth-logo'
				/>

				<input
					className="input"
					placeholder="Ingresá nuevamente tu contraseña"
					type="password"
					autoComplete='new-password'
					value={checkPassword}
					onChange={e => setDatos({ ...datos, checkPassword: e.target.value })}
				/>

			</div>

			{
				msg && (
					<Alert alerta={alerta} />
				)
			}

			<Button
				label='Registrate!'
				onClick={handleSignUp}
				theme='primary'
				fullWidth
				isBold
				style={{ marginTop: 32 }}
			/>

			<p className="p">
				Ya tenés una cuenta? <span className="span" onClick={() => navigate('/auth')}>Iniciá sesión</span>
			</p>

		</form>

	)
}

export default SignUp