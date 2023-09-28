import { useEffect, useState } from 'react';
import Cookie from 'js-cookie';

const useAuth = () => {

    const [token, setToken] = useState();

    useEffect(() => {
        logIn()
    }, [])

    function logIn() {
        const token = Cookie.get('access_token');
        setToken(token);
    }

    function logOut() {
        Cookie.remove('access_token');
        setToken(null)
    }

    return { logIn, logOut, token }
}

export default useAuth;
