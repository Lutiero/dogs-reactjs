import React from 'react';
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useForm from "../../Hooks/useForm.jsx";
import {USER_POST} from "../../Api.jsx";
import {UserContext} from "../../UserContext.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import Error from "../../Helper/Error.jsx";

const SignUpForm = () => {
    const username = useForm();
    const email = useForm("email");
    const password = useForm();

    const {userLogin} = React.useContext(UserContext);
    const {error, loading, request} = useFetch();

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(email.value)
        const {url, options} = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value
        });
        const {response} = await request(url, options);

        if (response.ok) userLogin(username.value, password.value);

    }

    return (
        <section className="animeLeft">
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Usuário"
                       type="text"
                       name="username" {...username} />
                <Input label="email"
                       type="text"
                       name="email" {...email} />
                <Input label="Password"
                       type="password"
                       name="password" {...password} />
                {loading ? <Button disabled>Cadastrando...</Button>: <Button>Cadastrar</Button>}
                <Error error={error} />
            </form>
        </section>
    );
};

export default SignUpForm;