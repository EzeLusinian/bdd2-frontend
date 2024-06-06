import React, { useState } from 'react'

import { BackButton, Button, Contenedor, Subtitle } from '../../components'

import { useNavigate } from 'react-router-dom'

const NuevoProyecto = () => {

    const navigate = useNavigate()

    const [datos, setDatos] = useState({
        name: '',
    })

    const { name } = datos

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
                    onClick={() => { }}
                    isBold
                />
            </div>

        </Contenedor>

    )
}

export default NuevoProyecto