import React from 'react';
import {Link} from "react-router-dom";
import SignUpForm from "./SignUpForm.jsx";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import styles from "../Forms/Input.module.css";

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [token, setToken] = React.useState('')

    function handleSubmit(event) {
        event.preventDefault();
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        })
            .then(response => response.json())
            .then(json => {
                setToken(json);
                localStorage.setItem('token', JSON.stringify(token));
            });

    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input name="username" label="Usuário" type="text" />
                <Input name="password" label="Senha" type="password" />
                <Button>Entrar</Button>
            </form>
            <Link to={'/login/sign-up'}>Cadastro</Link>
        </section>
    );
};

export default LoginForm;