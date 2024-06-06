import React from 'react'

import { Outlet, Navigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

import { Loading, Title } from '../components'

const ProtectedRoute = () => {

    const { auth, cargando } = useAuth();

    if (cargando) {
        return (
            <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Loading />
            </div>
        )
    }

    return (
        <>
            {
                auth?.id ?
                    (
                        <main>

                            <Title
                                label='Consultoría TPO'
                                isBold
                                isCenter
                                color='primary'
                            />

                            <div style={{ marginBottom: '6rem' }}>

                                <Outlet />

                            </div>

                        </main>

                    ) : (
                        <Navigate to={'/auth'} />
                    )
            }
        </>
    )
}

export default ProtectedRoute