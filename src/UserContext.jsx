import React from 'react';
import {TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET} from "./Api.jsx";
import {useNavigate} from "react-router-dom";

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    const userLogout = React.useCallback(async function () {
        localStorage.removeItem('token');
        setData(null);
        setError(null);
        setLoading(false);
        setLogin(false);
    }, [])

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setLogin(true);
        setData(json);
    }

    async function userLogin(username, password) {

        try {
            setError(null);
            setLoading(true);
            const {url, options} = TOKEN_POST({username, password});
            const response = await fetch(url, options);
            console.log(response);
            if (!response.ok) throw new Error(`Error: Usuário ou senha inválidos.`)
            const {token} = await response.json();
            localStorage.setItem('token', token);
            await getUser(token);
            navigate('/conta');
        } catch (e) {
            setError(e.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    setError(null);
                    setLoading(true);
                    const {url, options} = TOKEN_VALIDATE_POST(token);
                    const response = await fetch(url, options);
                    if (!response.ok) throw new Error('Token inválido.')
                    await getUser(token);
                } catch (err) {
                    await userLogout();
                } finally {
                    setLoading(false);
                }
            } else {
                setLogin(false);
            }
        }

        autoLogin();

    }, [userLogout])


    return <UserContext.Provider value={{
        userLogin,
        userLogout,
        data,
        error,
        loading,
        login
    }}>{children}</UserContext.Provider>;
};

