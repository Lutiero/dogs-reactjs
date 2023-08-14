import React, {useEffect} from 'react';
import FeedPhotosItem from "./FeedPhotosItem.jsx";
import useFetch from "../../Hooks/useFetch.jsx";
import {PHOTOS_GET} from "../../Api.jsx";
import Error from "../../Helper/Error.jsx";
import Loading from "../../Helper/Loading.jsx";
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({setModalPhoto}) => {
    const {data, loading, error, request} = useFetch();

    useEffect( () => {
        async function fetchPhotos() {
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0});
            const {response, json} = await request(url, options);
        }

        fetchPhotos();
    }, [request])

    if (error) return <Error error={error}/>
    if (loading) return <Loading/>
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotosItem key={photo.id}
                                    photo={photo}
                                    setModalPhoto={setModalPhoto}/>
                ))}
            </ul>
        );
    else return null;
};

export default FeedPhotos;