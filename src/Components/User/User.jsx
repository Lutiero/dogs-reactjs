import React, {useContext} from 'react';
import UserHeader from "./UserHeader.jsx";
import {Route, Routes} from "react-router-dom";
import Feed from "../Feed/Feed.jsx";
import UserPhotoPost from "./UserPhotoPost.jsx";
import UserStats from "./UserStats.jsx";
import {UserContext} from "../../UserContext.jsx";
import NotFound from "../NotFound.jsx";
import Head from "../../Helper/Head.jsx";

function User(){
    const {data} = useContext(UserContext);
    return (
        <section className="container">
            <Head title="Minha conta" />
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </section>
    );
}

export default User;