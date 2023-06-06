import React from 'react';
import {Link} from "react-router-dom";
import SignUpForm from "./SignUpForm.jsx";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import styles from "../Forms/Input.module.css";
import useForm from "../../Hooks/useForm.jsx";
import {TOKEN_POST, USER_GET} from "../../api.jsx";
import login from "./Login.jsx";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    React.useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            getUser(token);
        }

    }, []);

    async function getUser(token) {
        const {url, options} = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            const {url, options} = TOKEN_POST(
                {
                    username: username.value,
                    password: password.value
                }
            );

            const response = await fetch(url, options);
            const json = await response.json();
            localStorage.setItem('token', json.token);
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input name="username"
                       label="Usuário"
                       type="text" {...username} />
                <Input name="password"
                       label="Senha"
                       type="password" {...password} />
                <Button>Entrar</Button>
            </form>
            <Link to={'/login/sign-up'}>Cadastro</Link>
        </section>
    );
};

export default LoginForm;