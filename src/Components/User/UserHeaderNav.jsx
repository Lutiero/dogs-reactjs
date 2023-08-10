import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {UserContext} from "../../UserContext.jsx";
import {ReactComponent as MinhasFotos} from "../../Assets/feed.svg";
import {ReactComponent as Estatisticas} from "../../Assets/estatisticas.svg";
import {ReactComponent as AdicionarFoto} from "../../Assets/adicionar.svg";
import {ReactComponent as Sair} from "../../Assets/sair.svg";
import styles from "./UserNavHeader.module.css";
import useMedia from "../../Hooks/useMedia.jsx";

const UserHeaderNav = () => {
    const {userLogout} = React.useContext(UserContext);
    const mobile = useMedia('(max-width: 400px)');
    const navigate = useNavigate();
    console.log(mobile);
    function handleLogout() {
        userLogout();
        navigate('/login');
    }
    return (
        <nav className={styles.nav}>
            <NavLink to={"/conta"} end><MinhasFotos/>{mobile && 'Minhas Fotos'}</NavLink>
            <NavLink to={"/conta/estatisticas"}><Estatisticas/>{mobile && 'Estatísticas'}</NavLink>
            <NavLink to={"/conta/postar"}><AdicionarFoto/>{mobile && 'Adicionar Foto'}</NavLink>
            <button onClick={handleLogout}><Sair/>{mobile && 'Sair'}</button>
        </nav>
    );
};

export default UserHeaderNav;