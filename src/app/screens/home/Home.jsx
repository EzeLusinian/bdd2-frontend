import React from 'react'

import { Contenedor, Title, Text, Button, Loading } from '../../components'

import { useNavigate } from 'react-router-dom'

import useGetProyectos from '../../../services/proyecto/useGetProyectos'

import useAuth from '../../../hooks/useAuth'

import './Home.scss'

const Home = () => {

    const navigate = useNavigate()

    const { auth } = useAuth();

    // TODO: reemplazar data por la lista de proyectos moqueados una vez que esté listo el backend
    const { isLoading, data } = useGetProyectos(auth.id)

    const proyectos = [
        { id: '1234', name: 'Proyecto 1', createdBy: '4321' },
        { id: '1234', name: 'Proyecto 2', createdBy: '4321' },
        { id: '1234', name: 'Proyecto 3', createdBy: '4321' },
        { id: '1234', name: 'Proyecto 4', createdBy: '4321' },
        { id: '1234', name: 'Proyecto 5', createdBy: '4321' },
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
                {/* <Button
                    label='Agregar Habilidades a mi perfil'
                    onClick={() => navigate('/nuevo-proyecto')}
                    isBold
                    style={{ width: 300, marginTop: 16 }}
                /> */}
            </div>

            {/* //TODO: agregar modal de habilidades */}
        </Contenedor>
    )
}

export default Home