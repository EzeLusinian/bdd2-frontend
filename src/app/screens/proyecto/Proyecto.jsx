import React, { useState } from 'react'

import { Button, Contenedor, Text, Subtitle, BackButton, Loading } from '../../components'

import { useNavigate } from 'react-router-dom'

import useGetTareas from '../../../services/tarea/useGetTareas'

import './Proyecto.scss'
import { ModalComentario } from './ModalComentario'
import { ModalEstadoTarea } from './ModalEstadoTarea'
import { ModalVerComentarios } from './ModalVerComentarios'
import { ModalAsignarEmpleadoAProyecto } from './ModalAsignarEmpleadoAProyecto'


const Proyecto = () => {

	const navigate = useNavigate()

	// TODO: tomar el id y el nombre del proyecto como query params para no usar context
	const { name: nombreProyecto, id } = { id: '1234', name: 'Proyecto' }

	// TODO: reemplazar la lista mockeada de tareas por lo que traiga el back
	//el id a pasar tiene que ser el del usuario
	const { isLoading, data }  = useGetTareas(id)
	const [isModalComentarioVisible, setIsModalComentarioVisible] = useState(false)
	const [isModalEstadoTareaVisible, setIsModalEstadoTareaVisible] = useState(false)
	const [isModalVerComentariosVisible, setIsModalVerComentariosVisible] = useState(false)
	const [isModalAsignarAProyecto, setIsModalAsignarAProyecto] = useState(false)
	const [selectedTareaId, setSelectedTareaId] = useState(null);
	
	const handleAddCommentClick = (tareaId) => {
        setSelectedTareaId(tareaId);
        setIsModalComentarioVisible(true);
    };

	const handleChangeEstadoClick = (tareaId) => {
        setSelectedTareaId(tareaId);
        setIsModalEstadoTareaVisible(true);
    };

	const handleChangeVerComentarios = (tareaId) => {
        setSelectedTareaId(tareaId);
        setIsModalVerComentariosVisible(true);
    };
	const handleChangeAsignarAProyecto = (tareaId) => {
        setIsModalAsignarAProyecto(true);
    };

	const tareas = [
		{ id: '1234', name: 'Tarea 1', encargado: 'Ricardo Alfonsin', fechaFinalizacion: new Date(), estado: 'Por hacer', horasEstimadas: 7, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore unde est eum optio quasi magnam facere quae atque quaerat molestiae et, accusantium doloribus ut, iusto facilis, obcaecati nihil hic' },
		{ id: '4321', name: 'Tarea 2', encargado: 'Alberto Fernandez', fechaFinalizacion: new Date(), estado: 'En desarrollo', horasEstimadas: 3, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore unde est eum optio quasi magnam facere quae atque quaerat molestiae et, accusantium doloribus ut, iusto facilis, obcaecati nihil hic' },
		{ id: '2142', name: 'Tarea 3', encargado: 'Javier Milei', fechaFinalizacion: new Date(), estado: 'En pruebas', horasEstimadas: 9, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore unde est eum optio quasi magnam facere quae atque quaerat molestiae et, accusantium doloribus ut, iusto facilis, obcaecati nihil hic' },
		{ id: '4215', name: 'Tarea 4', encargado: 'Pedro Sanchez', fechaFinalizacion: new Date(), estado: 'Finalizado', horasEstimadas: 16, descripcion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore unde est eum optio quasi magnam facere quae atque quaerat molestiae et, accusantium doloribus ut, iusto facilis, obcaecati nihil hic' },
	]

	if (isLoading) {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }}>
				<Loading />
			</div>
		)
	}

	return (
		<Contenedor>

			<div className='proyecto-screen'>
				<div className='botonesProyectoArriba'>
					<BackButton
						text='Atrás'
						onClick={() => navigate('/') }
					/>
					<Button
						label='Asignar'
						scale={75}
						isBold
						onClick={() => setIsModalAsignarAProyecto(true) }
					/>
				</div>
				

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
									{/* <Button
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
									/> */}
									<Button
										label='Agregar Comentario'
										//theme=''
										isBold
										scale={75}
										onClick={() => handleAddCommentClick(id)}
									/>
									<Button
										label='Cambiar Estado'
										//theme=''
										isBold
										scale={75}
										onClick={() => handleChangeEstadoClick(id)}
									/>
									<Button
										label='Ver Comentarios'
										//theme=''
										isBold
										scale={75}
										onClick={() => handleChangeVerComentarios(id)}
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

			<ModalComentario
                show={isModalComentarioVisible}
                cerrar={() => setIsModalComentarioVisible(false)}
                title="Agrega un comentario"
                clickOff={true}
                tareaId={selectedTareaId}
            />
			<ModalEstadoTarea
				show={isModalEstadoTareaVisible}
				cerrar={() => setIsModalEstadoTareaVisible(false)}
				title="Cambiar estado"
				clickOff={true}
				tareaId={selectedTareaId}
			 />

			 <ModalVerComentarios
				show={isModalVerComentariosVisible}
				cerrar={() => setIsModalVerComentariosVisible(false)}
				title="Comentarios"
				clickOff={true}
				tareaId={selectedTareaId}
			 />

			 <ModalAsignarEmpleadoAProyecto
			 	show={isModalAsignarAProyecto}
			 	cerrar={() => setIsModalAsignarAProyecto(false)}
				title={"Asignar a proyecto"}
			 />

		</Contenedor>
	)
}

export default Proyecto