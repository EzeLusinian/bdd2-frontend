import UseApi from '../../hooks/useApi';

const useGetEmpleadosPorProyecto = (idProyecto) => UseApi(
    `/empleados/proyectos/${idProyecto}`,
    {
        method: 'GET',
    }
)

export default useGetEmpleadosPorProyecto