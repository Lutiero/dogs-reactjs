import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useForm from "../../Hooks/useForm.jsx";
import {UserContext} from "../../UserContext.jsx";

const LoginForm = () => {
    const username = useForm();
    const password = useForm();
    const {userLogin, error, loading} = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLeft">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input name="username"
                       label="Usuário"
                       type="text" {...username} />
                <Input name="password"
                       label="Senha"
                       type="password" {...password} />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
                {error && <p>{error}</p>}
            </form>
            <Link to={'/login/sign-up'}>Cadastro</Link>
        </section>
    );
};

export default LoginForm;