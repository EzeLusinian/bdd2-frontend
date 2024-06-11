import UseApi from '../../hooks/useApi';

const usePutProyecto = () => UseApi(
    `/proyectos`,
    {
        method: 'PUT',
    }
)

export default usePutProyecto