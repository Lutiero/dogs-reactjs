import React, {useEffect, useState} from 'react';
import FeedModal from "./FeedModal.jsx";
import FeedPhotos from "./FeedPhotos.jsx";
import PropTypes from "prop-types";

function Feed({user}) {
    const [modalPhoto, setModalPhoto] = useState(null);
    const [pages, setPages] = useState([1]);
    const [infinite, setInfinite] = useState(true);

    useEffect(() => {
        function infiteScroll() {
            if (infinite) {
                const scroll = window.scrollY;
                const height = document.body.offsetHeight - window.innerHeight;
                let wait = false;
                if (scroll >= height * 0.75 && !wait) {
                    setPages((pages) => [...pages, pages.length + 1]);
                    wait = true;
                    setTimeout(() => {
                        wait = false
                    }, 500)
                }
            }
        }

        window.addEventListener('wheel', infiteScroll);
        window.addEventListener('scroll', infiteScroll);

        return () => {
            window.removeEventListener('whell', infiteScroll);
            window.removeEventListener('scroll', infiteScroll);
        }
    }, [infinite])
    return (
        <div>
            {modalPhoto && <FeedModal photo={modalPhoto}
                                      setModalPhoto={setModalPhoto}/>}
            {pages.map(page => <FeedPhotos user={user}
                                          key={page}
                                          page={page}
                                          setModalPhoto={setModalPhoto}
                                          setInfinite={setInfinite}
            />)}


        </div>
    );
}

Feed.defaultProps = {
    user: 0,
}
Feed.propTypes = {
    user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
}
export default Feed;