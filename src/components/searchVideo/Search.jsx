import React from 'react'
import s from './Search.module.css'
import { useState } from 'react'
import { HeartOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { addRequests } from '../../store/slices/userSlice'
import axios from 'axios'


const Search = () => {
const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const [videos, setVideos] = useState([])

    const urlKEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";
    const fetching = `https://www.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}&part=snippet,id&order=date&maxresults=10`;

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


    return (
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
    )
}

export default Search
