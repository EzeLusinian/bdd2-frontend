import React from 'react'

import { Button, Contenedor, Text, Subtitle, BackButton } from '../../components'

import { useNavigate } from 'react-router-dom'

import './Proyecto.scss'

const Proyecto = () => {

	const navigate = useNavigate()

	const { id, name: nombreProyecto } = { id: '1234', name: 'Proyecto' }

	const tareas = [
		{ id: '1234', name: 'Tarea 1', encargado: 'Ricardo Alfonsin', fechaFinalizacion: new Date(), estado: 'Por hacer', horasEstimadas: 7, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore unde est eum optio quasi magnam facere quae atque quaerat molestiae et, accusantium doloribus ut, iusto facilis, obcaecati nihil hic' },
		{ id: '4321', name: 'Tarea 2', encargado: 'Alberto Fernandez', fechaFinalizacion: new Date(), estado: 'En desarrollo', horasEstimadas: 3, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore unde est eum optio quasi magnam facere quae atque quaerat molestiae et, accusantium doloribus ut, iusto facilis, obcaecati nihil hic' },
		{ id: '2142', name: 'Tarea 3', encargado: 'Javier Milei', fechaFinalizacion: new Date(), estado: 'En pruebas', horasEstimadas: 9, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore unde est eum optio quasi magnam facere quae atque quaerat molestiae et, accusantium doloribus ut, iusto facilis, obcaecati nihil hic' },
		{ id: '4215', name: 'Tarea 4', encargado: 'Pedro Sanchez', fechaFinalizacion: new Date(), estado: 'Finalizado', horasEstimadas: 16, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore unde est eum optio quasi magnam facere quae atque quaerat molestiae et, accusantium doloribus ut, iusto facilis, obcaecati nihil hic' },
	]

	return (
		<Contenedor>

			<div className='proyecto-screen'>

				<BackButton
					text='Atrás'
					onClick={() => navigate('/') }
				/>

				<Subtitle
					label={`Proyecto: ${nombreProyecto}`}
					isBold
					isCenter
				/>

				<Text
					label='Tareas:'
					isBold
				/>

				{
					tareas.map(tarea => {
						const { id, name, encargado, fechaFinalizacion, estado, horasEstimadas, descripcion } = tarea
						const date = new Date(fechaFinalizacion)
						const fechaFin = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
						return (
							<div
								key={id}
								className='div-tarea'
							>
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<Text
										label={`${name} (${estado})`}
										isBold
									/>
								</div>
								<Text
									label={`Encargado: ${encargado}`}
									style={{ marginTop: 8 }}
								/>
								<Text
									label={`Horas estimadas: ${horasEstimadas}`}
									style={{ marginTop: 8 }}
								/>
								<Text
									label={`Fecha de finalización: ${fechaFin}`}
									style={{ marginTop: 8 }}
								/>
								<Text
									label={`Descripción: ${descripcion}`}
									style={{ marginTop: 8 }}
								/>
								<div className='botonera'>
									<Button
										label='Paso atrás'
										onClick={() => { }}
										theme='light-red'
										isBold
										scale={75}
									/>
									<Button
										label='Paso adelante'
										onClick={() => { }}
										theme='light-primary'
										isBold
										scale={75}
									/>
								</div>
							</div>
						)
					})
				}

				<Button
					label='Nueva tarea'
					onClick={() => navigate('/nueva-tarea')}
					fullWidth
					isBold
					style={{ marginTop: 16 }}
				/>

			</div>

		</Contenedor>
	)
}

export default Proyecto