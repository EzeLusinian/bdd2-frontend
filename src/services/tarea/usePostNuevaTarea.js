import UseApi from '../../hooks/useApi';

const usePostTareas = () => (
    `/tareas`,
    {
        method: 'POST',
    }
)

export default usePostTareas