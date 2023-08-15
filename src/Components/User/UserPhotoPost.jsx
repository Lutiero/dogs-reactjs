import React, {useEffect, useState} from 'react';
import styles from './UserPhotoPost.module.css';
import Input from "../Forms/Input.jsx";
import Button from "../Forms/Button.jsx";
import useForm from "../../Hooks/useForm.jsx";
import UseFetch from "../../Hooks/useFetch.jsx";
import {PHOTO_POST} from "../../Api.jsx";
import Error from "../../Helper/Error.jsx";
import {useNavigate} from "react-router-dom";
import Head from "../../Helper/Head.jsx";

function UserPhotoPost() {
    const nome = useForm();
    const peso = useForm('number');
    const idade = useForm('number');
    const [img, setImg] = useState({});
    const {data, error, loading, request} = UseFetch();
    const navigate = useNavigate();

    useEffect(()=> {
        if(data) navigate('../../conta');
    },[data, navigate])

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', nome.value);
        formData.append('peso', peso.value);
        formData.append('idade', idade.value);

        const token = localStorage.getItem('token');
        const {url, options} = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImgChange({target}) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <Head title="Poste sua foto" />
            <form onSubmit={handleSubmit}>
                <Input label="Nome"
                       type="text"
                       name="nome" {...nome} />
                <Input label="Peso"
                       type="number"
                       name="peso" {...peso} />
                <Input label="Idade"
                       type="number"
                       name="idade" {...idade} />
                <input className={styles.file}
                       type="file"
                       name="img"
                       id="img"
                       onChange={handleImgChange}/>
                {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}
                <Error error={error}/>
            </form>
            {img.preview && <div className={styles.preview}
                                 style={{backgroundImage: `url('${img.preview}')`}}></div>}
        </section>
    );
}

export default UserPhotoPost;