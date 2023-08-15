import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch.jsx";
import {PHOTO_GET} from "../../Api.jsx";
import Error from "../../Helper/Error.jsx";
import Loading from "../../Helper/Loading.jsx";
import PhotoContent from "./PhotoContent.jsx";
import Head from "../../Helper/Head.jsx";

const Photo = () => {
    const {id} = useParams();
    const {data, loading, error, request} = useFetch();

    useEffect(() => {
        const {url, options} = PHOTO_GET(id);
        request(url, options);
    }, [id, request])

    if(error) return <Error error={error}/>
    if(loading) return <Loading/>
    if(data)
    return (
        <section className='container mainContainer'>
            <Head title={data.photo.title}/>
            <PhotoContent data={data} single={true}/>
        </section>
    );
    else return null;
};

export default Photo;