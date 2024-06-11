import UseApi from '../../hooks/useApi';

const usePutTarea = () => UseApi(
    `/tareas`,
    {
        method: 'PUT',
    }
)

export default usePutTarea