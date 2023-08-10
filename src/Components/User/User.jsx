import React from 'react';
import UserHeader from "./UserHeader.jsx";
import {Route, Routes} from "react-router-dom";
import Feed from "../Feed/Feed.jsx";
import UserPhotoPost from "./UserPhotoPost.jsx";
import UserStats from "./UserStats.jsx";

function User() {
    return (
        <section className="container">
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="postar" element={<UserPhotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
            </Routes>
        </section>
    );
}

export default User;