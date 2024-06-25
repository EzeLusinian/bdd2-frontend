import UseApi from '../../hooks/useApi';

// es el id del proyecto
const useGetTareas = (id) => UseApi(
    `/proyectos/empleado/${id}`,
    {
        method: 'GET',
        callOnLoad: true
    }
)

export default useGetTareas