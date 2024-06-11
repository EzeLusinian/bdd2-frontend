import UseApi from '../../hooks/useApi';

const usePostNuevoProyecto = () => UseApi(
    `/proyectos`,
    {
        method: 'POST',
    }
)

export default usePostNuevoProyecto