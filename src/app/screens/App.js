import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from '../layouts/AuthLayout';
import ProtectedRoute from '../layouts/ProtectedRoute';

import Login from './auth/Login';
import SignUp from './auth/SignUp';
import Home from './home/Home';

import Proyecto from './proyecto/Proyecto';
import NuevoProyecto from './proyecto/NuevoProyecto';
import NuevaTarea from './tarea/NuevaTarea';

import { AuthProvider } from '../../context/AuthProvider';

function App() {
	return (

		<BrowserRouter>

			<AuthProvider>

				<Routes>

					<Route path='/auth' element={<AuthLayout />}>

						<Route index element={<Login />} />

						<Route path='sign-up' element={<SignUp />} />

					</Route>

					<Route path="/" element={<ProtectedRoute />}>

						<Route index element={<Home />} />

						<Route path='proyecto' element={<Proyecto />} />

						<Route path='nuevo-proyecto' element={<NuevoProyecto />} />

						<Route path='nueva-tarea' element={<NuevaTarea />} />

					</Route>

				</Routes>

			</AuthProvider>

		</BrowserRouter>

	);
}

export default App;
