import UseApi from '../../hooks/useApi';

const useDeleteTarea = () => UseApi(
    `/tareas`,
    {
        method: 'DELETE',
    }
)

export default useDeleteTarea