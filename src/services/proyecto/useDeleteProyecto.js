import UseApi from '../../hooks/useApi';

const useDeleteProyecto = () => UseApi(
    `/proyectos`,
    {
        method: 'DELETE',
    }
)

export default useDeleteProyecto