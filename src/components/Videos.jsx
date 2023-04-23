import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from '../store/slices/userSlice';
import { IsListBtn } from '../utils/IsListBtns';
import { IsTableBtn } from '../utils/IsTableBtn';
import { addUserData, replaceUserData } from '../store/slices/userDataSlice';








const Videos = () => {
    const [videos, setVideos] = useState([])
    const [value, setValue] = useState('')
    const [isList, setIsList] = useState(true)
    const user = useSelector(state => state.user)
    const userID = useSelector(state => state.user.id)
    const users = useSelector(state => state.userData.userData)


    const urlKEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";
    const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}&part=snippet,id&order=date&maxResults=10`;
    const dispatch = useDispatch()
    const store = useSelector(state => state.filter.filterData)

    console.log(123, user);
    console.log(1234, users);

    const addUsers = () => {
        const arr = users.find(item => item.id === user.id) 
        if (!arr) {
          
            dispatch(addUserData(user))
        } else{
            dispatch(replaceUserData(user))
            
        }
            }

    const handleClick = () => {
        axios.get(fetchURL)
            .then((response) => {
                setVideos(response.data.items)
            })
            .catch(e => console.log(e))
        setValue('')
    };

    const getSavedRequests = () => {
        value !== '' ? dispatch(addRequests(value)) : alert('Введите название запроса')
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

        addUsers()
       
    }, [])
    //store.value

    return (
        <>

            <div >
                <div >
                    Поиск видео
                </div>
                <div>
                    <input
                        value={value}
                        type="text"
                        placeholder='search video...'
                        onChange={(e) => {
                            setValue(e.target.value)
                        }}>
                    </input>

                    <button
                        className='search_btn'
                        onClick={handleClick}>
                        Search
                    </button>
                </div>
                <div>
                    <button
                        onClick={getSavedRequests}>
                        Save
                    </button>
                </div>
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



        </>
    )
}

export default Videos;
