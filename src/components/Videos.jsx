import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../store/slices/requestsSlice';
import { IsListBtn } from '../utils/IsListBtns';
import { IsTableBtn } from '../utils/IsTableBtn';







const Videos = () => {
    const [videos, setVideos] = useState([])
    const [value, setValue] = useState([])
    const [isList, setIsList] = useState(true)

    const urlKEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";
    const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}&part=snippet,id&order=date&maxResults=10`;
    const dispatch = useDispatch()
    const store = useSelector(state => state.filter.filterData)
    console.log(1, store.value);
    // console.log(title);
    // console.log(selected);
// console.log(store.value.quantity);


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

    useEffect(() => {
        store.value
            ?
            axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${store.value.title}&key=${urlKEY}&part=snippet,id&order=${store.value.selected}&maxResults=${store.value.quantity}`)
                .then((response) => {
                    setVideos(response.data.items)
                })

                .catch(e => console.log(e))
            :
            <div>111</div>

    },[store.value])

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
                        <button
                        onClick={handleClick}>
                        Search
                    </button>
                    </form>

                    <button
                   
                        onClick={getSavedRequests}>
                        Save
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
