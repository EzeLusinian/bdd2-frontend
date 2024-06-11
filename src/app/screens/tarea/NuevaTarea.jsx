import React, { useState, useEffect } from 'react'

import { Contenedor, BackButton, Subtitle, Button, Loading } from '../../components'

import usePostTareas from '../../../services/tarea/usePostNuevaTarea'

import { useNavigate } from 'react-router-dom'

const NuevaTarea = () => {

    const navigate = useNavigate()

    const { isError, isLoading, data, callApi } = usePostTareas()

    const [datos, setDatos] = useState({
        name: '',
        horas: '',
        fechaFin: '',
    })

    const { name, horas, fechaFin } = datos

    useEffect(() => {
		if (isError) {
			// TODO: manejar error
		} else if (!isLoading && data) {
            // TODO: avisar que se creó correctamente
		}
	}, [data, isError, isLoading])

    const onClickCrear = (e) => {
        
        e.preventDefault()

        if(name.trim() === ''){
            // TODO: alerta de nombre vacío
        }

        callApi({
            name,
            horas,
            fechaFin
        })

    }

    if (isLoading) {
		return (
			<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }}>
				<Loading />
			</div>
		)
	}

    return (

        <Contenedor>

            <BackButton
                text='Atrás'
                onClick={() => navigate('/')}
            />

            <Subtitle
                label='Nueva tarea'
                isBold
                isCenter
            />

            <div className="inputForm">
                <input
                    className="input"
                    placeholder="Ingresá el nombre de la tarea"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setDatos({ ...datos, name: e.target.value })
                    }}
                />
            </div>

            <div className="inputForm">
                <input
                    className="input"
                    placeholder="Ingresá la cantidad de horas estimadas"
                    type="number"
                    value={horas}
                    onChange={(e) => {
                        setDatos({ ...datos, horas: e.target.value })
                    }}
                />
            </div>

            // TODO: agregar fecha finalizacion tipo input date

            <div className='centrar mt1'>
                <Button
                    label='Crear nueva tarea'
                    onClick={onClickCrear}
                    isBold
                />
            </div>

        </Contenedor>

    )
}

export default NuevaTarea