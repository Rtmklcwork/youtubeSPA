import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../store/slices/requestsSlice';
import SavedRequests from './SavedRequests';





const Videos = () => {
        const [videos, setVideos] = useState([])
    const [value, setValue] = useState('')
    const urlKEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";
    const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}`;
    const dispatch = useDispatch()

    const handleClick = () => {
        axios.get(fetchURL)
            .then((response) => {
                setVideos(response.data.items)
            })

            .catch(e => console.log(e))
        setValue('')

        console.log(value);
        dispatch(addRequests(value))
    };

    
    return (
        <>
            
            <div>
                <h1>Поиск видео</h1>
                <form action=''

                >
                    <input
                        value={value}
                        type="text"
                        placeholder='search video...'
                        onChange={(e) => {
                            setValue(e.target.value)
                        }} />
                </form>
                <button
                    onClick={handleClick}>
                    Search
                </button>

                <div>
                    {videos.map((items, id) => {
                        // console.log(items);
                        return (
                            <div key={id}>
                                <iframe width="200" height="200" src={"https://www.youtube.com/embed/" + items.id.videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
