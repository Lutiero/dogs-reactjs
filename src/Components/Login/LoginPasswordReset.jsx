import React, {useEffect, useState} from 'react';
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useForm from "../../Hooks/useForm.jsx";
import {PASSWORD_RESET} from "../../Api.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import Error from "../../Helper/Error.jsx";
import {useNavigate} from "react-router-dom";
import Head from "../../Helper/Head.jsx";

const LoginPasswordReset = () => {
    const {login, setLogin} = useState('');
    const [key, setKey] = useState('');
    const password = useForm();
    const {error, loading, request} = useFetch();
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key')
        const login = params.get('login');
        if (key) setKey(key);
        if (login) setLogin(login);
    }, [])

    async function handleSubmit(event) {
        event.preventDefault();
        if (password.validate()) {
            const {url, options} = PASSWORD_RESET({key, login, password: password.value});
            const {response} = await request(url, options)
            if (response.ok) navigate('/login');
        }
    }

    return (
        <div>
            <Head title="Reset a senha" />
            <form onSubmit={handleSubmit}>
                <h1 className='title'>Resete a senha</h1>
                <Input label="Nova senha"
                       type="passoword"
                       name="password" {...password} />
                {loading ? <Button disabled>Resentando...</Button> : <Button>Resetar</Button>}
            </form>
            <Error error={error}/>
        </div>
    );
};

export default LoginPasswordReset;