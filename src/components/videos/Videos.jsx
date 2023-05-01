import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRequests } from './../../store/slices/userSlice';
import { IsListBtn } from './../../utils/IsListBtns';
import { IsTableBtn } from './../../utils/IsTableBtn';
import { addUserData, replaceUserData } from './../../store/slices/userDataSlice';
import s from './Videos.module.css'
import { HeartOutlined } from '@ant-design/icons'
import Search from '../searchVideo/Search';




const Videos = () => {
    const [videos, setVideos] = useState([])
    const [value, setValue] = useState('')
    const [isList, setIsList] = useState(true)
    const user = useSelector(state => state.user)
    const users = useSelector(state => state.userData.userData)





    const urlKEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";
    const fetching = `https://www.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}&part=snippet,id&order=date&maxresults=10`;
    const dispatch = useDispatch()
    const store = useSelector(state => state.filter.filterData)


    const addUsers = () => {
        const arr = users.find(item => item.id === user.id)

        if (!arr) {

            dispatch(addUserData(user))
        } else {
            dispatch(replaceUserData(user))

        }
    }

    const handleClick = () => {
        axios.get(fetching)
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
            <div>Video not found</div>

        addUsers()
        setValue('')
    }, [user.requests])






    return (
        <>
            <div className={s.wrapper} >

                <div className={s.title} >
                    <h2>Search video</h2>
                    <div className={s.search}>

                        <input className={s.search_npt}
                            value={value}
                            type="text"
                            placeholder='Enter a request...'
                            onChange={(e) => {
                                setValue(e.target.value)
                            }}>
                        </input>

                        <div>
                            <button className={s.save_btn}
                                onClick={getSavedRequests}>
                                <HeartOutlined />
                            </button>
                        </div>
                        <div>
                            <button
                                className={s.search_btn}
                                onClick={handleClick}>
                                Search
                            </button>
                        </div>
                    </div>

                </div>
            </div>

          
            <div className={!videos.length > 0 ? s.fltr_btns : ''}>
                <IsListBtn className={s.fltr_btn} onClick={() => setIsList(true)} />
                <IsTableBtn className={s.fltr_btn} onClick={() => setIsList(false)} />

            </div>
            <div className={!isList ? 'gridBtn' : ''}>


                {videos.map((item, id) =>



                    isList ?

                        <ul className={s.list}
                            key={id}>
                            <li >
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
                            <li className={s.list}>
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
