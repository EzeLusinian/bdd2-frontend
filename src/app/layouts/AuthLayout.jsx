import React from 'react'

import { Outlet, Navigate } from 'react-router-dom'

import { Loading } from '../components'

import useAuth from '../../hooks/useAuth'

const AuthLayout = () => {

    const { auth, cargando } = useAuth();

    const redirectPath = '/';

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
                !auth?.id ?
                    (
                        <main className='main-design'>

                            <div className='auth-layout'>

                                <Outlet />

                            </div>

                        </main>

                    ) : (
                        <Navigate to={redirectPath} />
                    )
            }
        </>

    )
}

export default AuthLayout