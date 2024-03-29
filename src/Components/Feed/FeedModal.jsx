import React, {useEffect} from 'react';
import styles from './FeedModal.module.css';
import useFetch from "../../Hooks/useFetch.jsx";
import {PHOTO_GET} from "../../Api.jsx";
import Error from "../../Helper/Error.jsx";
import Loading from "../../Helper/Loading.jsx";
import PhotoContent from "../Photo/PhotoContent.jsx";
const FeedModal = ({photo, setModalPhoto}) => {
    const {data, error, loading, request} = useFetch();
    useEffect(()=> {
        const {url, options} = PHOTO_GET(photo.id);
        request(url, options);

    },[photo, request]);
    
    function handleOutSideClick(event) {
        if(event.target === event.currentTarget) setModalPhoto(null);
    }
    
    return (
        <div className={styles.modal} onClick={handleOutSideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data}/>}
        </div>
    );
};

export default FeedModal;