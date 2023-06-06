import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUpForm.jsx";
import ForgotPasswordForm from "./ForgotPasswordForm.jsx";
import ResetPasswordForm from "./ResetPasswordForm.jsx";
import {UserContext} from "../../UserContext.jsx";

const Login = () => {
    const {login} = React.useContext(UserContext);
    if(login) return <Navigate to={'/conta'}/>
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