import React, {useState} from 'react';
import FeedModal from "./FeedModal.jsx";
import FeedPhotos from "./FeedPhotos.jsx";

function Feed() {
    const [modalPhoto, setModalPhoto] = useState(null);
    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />}
            <FeedPhotos setModalPhoto={setModalPhoto} />
        </div>
    );
}

export default Feed;