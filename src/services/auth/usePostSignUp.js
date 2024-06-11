import UseApi from '../../hooks/useApi';

const usePostSignUp = () => UseApi(
    `/users`,
    {
        method: 'POST',
    }
)

export default usePostSignUp