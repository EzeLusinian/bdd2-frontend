import { useEffect, useState } from 'react';

import useAuth from './useAuth';

const REACT_APP_BACKEND = 'https://consultancymanager.azurewebsites.net/api'

const UseApi = (endpoint, config) => {

    // TODO: ver si esta bien estructurado el dato
    const { auth } = useAuth();
    const jwt = auth.token

    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState(null)

    const [isError, setIsError] = useState(false)
    
    const {
        method,
        callOnLoad = false,
    } = config

    const callApi = async (dataApi = {}, addEndpoint = '') => {

        setIsLoading(true)

        setIsError(false)

        let responseData = null
        let hasError = false

        try {

            const completeOptions = {
                method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': jwt ? `Bearer ${jwt}` : ''
                },
                body: JSON.stringify(dataApi)
            }

            const { body, ...optionsGet } = completeOptions

            const options = method === 'GET' ? optionsGet : completeOptions

            await fetch(REACT_APP_BACKEND + endpoint + addEndpoint || '', options)
                .then(async (response) => {

                    const data = await response.json()

                    setData(data || null)

                    responseData = data || null

                    setIsError(false)

                }).catch((error) => {

                    console.log(error)

                    const {
                        code = '',
                        msg = 'Ha ocurrido un error, intente más tarde'
                    } = error?.response?.data

                    setData({ code, msg })

                    responseData = { code, msg }

                    hasError = true

                    setIsError(true)

                }).finally(() => setIsLoading(false))


        } catch (error) {

            setData({ code: "GENERIC", msg: 'Ha ocurrido un error, intente más tarde' })

            setIsError(true)

            setIsLoading(false)

        }

        return { response: responseData, hasError }

    }

    useEffect(() => {
        if (callOnLoad) callApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        
    }, [])

    return {
        isLoading,
        isError,
        data,
        callApi,
    }

}

export default UseApi