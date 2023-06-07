import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import ForgotPasswordForm from "./ForgotPasswordForm.jsx";
import ResetPasswordForm from "./ResetPasswordForm.jsx";
import {UserContext} from "../../UserContext.jsx";
import styles from "./Login.module.css";

const Login = () => {
    const {login} = React.useContext(UserContext);
    if (login) return <Navigate to={'/conta'}/>
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path={'/'}
                           element={<LoginForm/>}/>
                    <Route path={'signup'}
                           element={<SignUpForm/>}/>
                    <Route path={'forgot-password'}
                           element={<ForgotPasswordForm/>}/>
                    <Route path={'reset-password'}
                           element={<ResetPasswordForm/>}/>
                </Routes>
            </div>
        </section>
    );
};

export default Login;