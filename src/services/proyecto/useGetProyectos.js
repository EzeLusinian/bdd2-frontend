import UseApi from '../../hooks/useApi';

const useGetProyectos = (id) => UseApi(
    `/proyectos/${id}`,
    {
        method: 'GET',
        callOnLoad: true
    }
)

export default useGetProyectos