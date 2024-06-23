import React, { useState, useEffect } from 'react'

import { BackButton, Button, Contenedor, Subtitle, Loading } from '../../components'

import usePostNuevoProyecto from '../../../services/proyecto/usePostNuevoProyecto'

import { useNavigate } from 'react-router-dom'

import { Modal } from '../../components'

const NuevoProyecto = () => {

    const navigate = useNavigate()

    const { isLoading, isError, data, callApi } = usePostNuevoProyecto()

    const [datos, setDatos] = useState({
        name: '',
    })

    const initialDatos = {
        name: ''
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
            
		if (isError) {
			// TODO: manejar error
		} else if (!isLoading && data) {
            setIsModalVisible(true)
            setDatos(initialDatos)
            
            // DONE: avisar que se creó correctamente
		}
	}, [data, isError, isLoading])

    const onClickCrear = (e) => {
        
        e.preventDefault()

        if(name.trim() === ''){
            // DONE: alerta de nombre vacío
            alert("El nombre del proyecto esta vacío")
        }

        callApi({
            name
        })

    }

    const { name } = datos

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
                onClick={()=> navigate('/')}
            />

            <Subtitle
                label='Nuevo proyecto'
                isBold
                isCenter
            />

            <div className="inputForm">
                <input
                    className="input"
                    placeholder="Ingresá el nombre del proyecto"
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setDatos({ ...datos, name: e.target.value })
                    }}
                />
            </div>

            <div className='centrar mt1'>
                <Button
                    label='Crear nuevo proyecto'
                    onClick={onClickCrear}
                    isBold
                />
            </div>

            <Modal
                show={isModalVisible}
                cerrar={() => setIsModalVisible(false)}
                title="Proyecto Creado"
                clickOff={true}
            >
                <p>La tarea se ha creado correctamente.</p>
            </Modal>

        </Contenedor>

    )
}

export default NuevoProyecto