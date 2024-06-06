import React, { useState } from 'react'

import { Contenedor, BackButton, Subtitle, Button } from '../../components'

import { useNavigate } from 'react-router-dom'

const NuevaTarea = () => {

    const navigate = useNavigate()

    const [datos, setDatos] = useState({
        name: '',
        horas: '',
    })

    const { name, horas } = datos

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

            <div className='centrar mt1'>
                <Button
                    label='Crear nueva tarea'
                    onClick={() => { }}
                    isBold
                />
            </div>

        </Contenedor>

    )
}

export default NuevaTarea