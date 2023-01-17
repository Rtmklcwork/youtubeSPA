import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';






const Videos = () => {

    const [videos, setVideos] = useState([])
    const [value, setValue] = useState('')
    const urlKEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";
    const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}`;
    // useEffect(() => {
    //     setVideos()
    // }, []);

    const handleClick = () => {
        axios.get(fetchURL)
            .then((response) => {
                setVideos(response.data.items)
            })

            .catch(e => console.log(e))

    }


    return (
        <>
            <div>
                <h1>Поиск видео</h1>
                <form action="">
                    <input
                        value={value}
                        type="text"
                        placeholder='search video...'
                        onChange={(e) => setValue(e.target.value)} />
                </form>
                <button onClick={handleClick}>
                    Search
                </button>

                <div>
                    {videos.map((items) => {
                        console.log(items);
                        return (
                            <div>
                                <iframe width="200" height="200" src={"https://www.youtube.com/embed/" + items.id.videoId} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                               <p>{items.title}</p>
                            </div>

                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Videos;
