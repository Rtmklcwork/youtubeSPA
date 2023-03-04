import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRequests } from '../store/slices/requestsSlice';
import { IsListBtn } from '../utils/IsListBtns';
import { IsTableBtn } from '../utils/IsTableBtn';







const Videos = () => {
    const [videos, setVideos] = useState([])
    const [value, setValue] = useState('')
    const urlKEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";
    const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}&part=snippet,id&order=date&maxResults=10`;
    const dispatch = useDispatch()
    const [isList, setIsList] = useState(true)

    const handleClick = () => {
        axios.get(fetchURL)
            .then((response) => {
                setVideos(response.data.items)
            })

            .catch(e => console.log(e))
        setValue('')

        console.log(value);

    };

    const getSavedRequests = () => {
        dispatch(addRequests(value))
    }
    console.log(isList);

    console.log(videos);
    return (
        <>

            <div>
                <h1>Поиск видео</h1>

                <div>
                    <form action=''

                    >
                        <input
                            value={value}
                            type="text"
                            placeholder='search video...'
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}>

                        </input>
                    </form>

                    <button
                     onClick={getSavedRequests}>
                        Save
                        </button>

                    <button
                        onClick={handleClick}>
                        Search
                    </button>
                </div>

                <div>
                    <IsListBtn onClick={() => setIsList(true)} />
                    <IsTableBtn onClick={() => setIsList(false)} />
                </div>

                <div className={!isList ? 'gridBtn' : ''}>


                    {videos.map((item, id) =>



                        isList ?

                            <ul
                                key={id}>
                                <li>
                                    <iframe
                                        width="200"
                                        height="200"
                                        src={"https://www.youtube.com/embed/" + item.id.videoId}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    >
                                    </iframe>
                                    <p style={{ maxWidth: 200 }}>{item.snippet.title}</p>
                                </li>
                            </ul>
                            :

                            <ul>
                                <li>
                                    <iframe
                                        width="200"
                                        height="200"
                                        src={"https://www.youtube.com/embed/" + item.id.videoId}
                                        title={item.snippet.title}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    >
                                    </iframe>
                                    <p style={{ maxWidth: 200 }}> {item.snippet.title}</p>
                                </li>

                            </ul>
                    )}

                </div>

            </div>
        </>
    )
}

export default Videos;
