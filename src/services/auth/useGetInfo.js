import UseApi from '../../hooks/useApi';

const useGetInfo = () => UseApi(
    `/auths/me`,
    {
        method: 'GET',
    }
)

export default useGetInfo