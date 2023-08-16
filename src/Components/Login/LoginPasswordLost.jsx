import React from 'react';
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useForm from "../../Hooks/useForm.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import {PASSWORD_LOST} from "../../Api.jsx";
import Error from "../../Helper/Error.jsx";
import Head from "../../Helper/Head.jsx";

const LoginPasswordLost = () => {
    const login = useForm();
    const {data, loading, error, request} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        if (login.validate()) {
            const {url, options} = PASSWORD_LOST(
                {
                    login: login.value,
                    url: window.location.href.replace("forgot-password", "reset-password"),
                })
            await request(url, options);

        }
    }

    return (
        <section className='animeLeft'>
            <Head title="Perdeu a senha?" />
            <h1 className='title'>Perdeu a senha?</h1>
            {data ? <p style={{color: '#4c1'}}>{data}</p> : <form onSubmit={handleSubmit}>
                <Input label="e-mail / Usuário"
                       type="text"
                       name="login" {...login}/>
                {loading ? <Button disabled>Enviando</Button> : <Button>Enviar e-mail</Button>}
            </form>}

            <Error error={error}/>
        </section>
    );
};

export default LoginPasswordLost;