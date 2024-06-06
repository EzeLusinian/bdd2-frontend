import React from 'react'

import { Contenedor, Title, Text, Button } from '../../components'

import { useNavigate } from 'react-router-dom'

import './Home.scss'

const Home = () => {

    const navigate = useNavigate()

    const proyectos = [
        { id: '1234', name: 'Proyecto 1', createdBy: '4321' },
        { id: '1234', name: 'Proyecto 2', createdBy: '4321' },
        { id: '1234', name: 'Proyecto 3', createdBy: '4321' },
        { id: '1234', name: 'Proyecto 4', createdBy: '4321' },
        { id: '1234', name: 'Proyecto 5', createdBy: '4321' },
    ]

    return (
        <Contenedor>

            <Title
                label='Proyectos asignados'
            />
            <div className='home-screen'>
                <div className='list-proyectos'>
                    {
                        proyectos?.map((proyecto) => (
                            <button
                                key={proyecto.id}
                                className='item-proyecto'
                                onClick={() => navigate('/proyecto')}
                            >
                                <Text
                                    label={`Nombre del proyecto: ${proyecto.name}`}
                                />
                            </button>
                        ))
                    }
                </div>
                <Button
                    label='Crear nuevo proyecto'
                    onClick={() => navigate('/nuevo-proyecto')}
                    isBold
                    style={{ width: 300, marginTop: 16 }}
                />
            </div>
        </Contenedor>
    )
}

export default Home