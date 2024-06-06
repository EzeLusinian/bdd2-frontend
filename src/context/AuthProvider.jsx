import { useState, useEffect, createContext } from 'react'

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        id: '1234'
    })
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        autenticarUsuario()
    }, [])

    const autenticarUsuario = async () => {

        const token = localStorage.getItem('bdd2-token')

        if (!token) {
            setCargando(false)
            return
        }

        try {

            const response = await fetch(`${process.env.REACT_APP_URL_BACKEND}${'/user/perfil'}` || '', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            }).then(async (resp) => {
                return await resp.json()
            }).catch((error) => {
                console.log({ error })
                return null
            });

            setAuth(response)

        } catch (error) {

            setAuth({})

        }

        setCargando(false)


    }

    const cerrarSesionAuth = () => {
        setAuth({})
        localStorage.setItem('bdd2-token', '')   
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                cerrarSesionAuth,
                autenticarUsuario,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;