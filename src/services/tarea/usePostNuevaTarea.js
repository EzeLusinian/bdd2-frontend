import UseApi from '../../hooks/useApi';

const usePostTareas = () => UseApi(
    `/tareas`,
    {
        method: 'POST',
    }
)

export default usePostTareas