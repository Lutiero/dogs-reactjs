import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login/Login.jsx";

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'login'} element={<Login />}/>
                </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
