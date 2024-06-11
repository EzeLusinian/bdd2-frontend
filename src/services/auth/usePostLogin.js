import UseApi from '../../hooks/useApi';

const usePostLogin = () => UseApi(
    `/auths`,
    {
        method: 'POST',
    }
)

export default usePostLogin