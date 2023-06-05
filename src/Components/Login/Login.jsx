import React from 'react';
import { Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import ForgotPasswordForm from "./ForgotPasswordForm.jsx";
import ResetPasswordForm from "./ResetPasswordForm.jsx";

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<LoginForm />}/>
                <Route path={'sign-up'} element={<SignUpForm />}/>
                <Route path={'forgot-password'} element={<ForgotPasswordForm />}/>
                <Route path={'reset-password'} element={<ResetPasswordForm />}/>
            </Routes>
        </div>
    );
};

export default Login;