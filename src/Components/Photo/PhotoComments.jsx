import React, {useContext, useState} from 'react';
import {UserContext} from "../../UserContext.jsx";
import PhotoCommentsForm from "./PhotoCommentsForm.jsx";
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
    const [comments, setComments] = useState(() => comments);
    const {login} = useContext(UserContext);

    return (<>
        <ul className={styles.comments}>
            {comments.map((comment) => <li key={comment.comment_ID}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
            </li>)}
        </ul>
        {login && <PhotoCommentsForm id={props.id} setComment={setComments}/>}
    </>);
};

export default PhotoComments;