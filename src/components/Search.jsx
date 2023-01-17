import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Search = () => {
    const urlKEY = "AIzaSyCluKfq9XYmCC32ZAcNy-ZHYsHXHHpu8Lk";
    const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}`;
    const [videos, setVideos] = useState([])
    const [value, setValue] = useState('')

    const onSearch = () => {
        axios.get(fetchURL)
            .then((response) => {
                setVideos((response.data.items))
            })

            .catch(e => console.log(e))
        console.log(videos);
    }

    return (
        <div>
            <form
                
                action="">
                <input
                    id='video-search'
                    value={value}
                    type="text"
                    placeholder='search video...'
                onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}

export default Search
