import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../UserContext.jsx";
import PhotoCommentsForm from "./PhotoCommentsForm.jsx";
import styles from './PhotoComments.module.css';

const PhotoComments = (props) => {
    const [comments, setComments] = useState(() => props.comments);
    const commentsSection = React.useRef(null);
    const {login} = useContext(UserContext);

    useEffect(() => {
        commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }, [comments]);

    return (<>
        <ul ref={commentsSection} className={`${styles.comments} ${props.single ? styles.single : ''}`}>
            {comments.map((comment) => <li key={comment.comment_ID}>
                <b>{comment.comment_author}: </b>
                <span>{comment.comment_content}</span>
            </li>)}
        </ul>
        {login && <PhotoCommentsForm id={props.id} single={props.single} setComments={setComments}/>}
    </>);
};

export default PhotoComments;