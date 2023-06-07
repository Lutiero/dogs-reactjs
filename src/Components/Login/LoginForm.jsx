import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useForm from "../../Hooks/useForm.jsx";
import {UserContext} from "../../UserContext.jsx";
import Error from "../../Helper/Error.jsx";
import styles from "./LoginForm.module.css";
import stylesBtn from "../Forms/Button.module.css"

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
            <h1 className='title'>Login</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <Input name="username"
                       label="Usuário"
                       type="text" {...username} />
                <Input name="password"
                       label="Senha"
                       type="password" {...password} />
                {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}
            <Error error={error} />
            </form>
            <Link className={styles.forgot} to={'/login/forgot'}>Perdeu a senha?</Link>
            <div className={styles.signup}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site.</p>
                <Link className={stylesBtn.button} to={'/login/signup'}>Cadastro</Link>
            </div>
        </section>
    );
};

export default LoginForm;