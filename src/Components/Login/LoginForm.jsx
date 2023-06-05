import React from 'react';
import {Link} from "react-router-dom";
import SignUpForm from "./SignUpForm.jsx";

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
                <input type="text" value={username} onChange={({target}) => setUsername(target.value)}/>
                <input type="password" value={password} onChange={({target}) => setPassword(target.value)}/>
                <button>Entrar</button>
            </form>
            <Link to={'/login/sign-up'}>Cadastro</Link>
        </section>
    );
};

export default LoginForm;