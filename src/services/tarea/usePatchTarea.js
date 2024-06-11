import UseApi from '../../hooks/useApi';
// paso solamente lo que quiero modificar de la tarea
const usePatchTarea = () => UseApi(
    `/tareas`,
    {
        method: 'PATCH',
    }
)

export default usePatchTarea