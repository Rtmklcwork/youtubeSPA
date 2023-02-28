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
    const fetchURL = `https://youtube.googleapis.com/youtube/v3/search?q=${value}&key=${urlKEY}&part=snippet,id&order=date&maxResults=5`;
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
        dispatch(addRequests(value))
    };
    console.log(isList);

  console.log(videos);
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
                    <IsListBtn onClick={() => setIsList(true)} />
                    <IsTableBtn onClick={() => setIsList(false)} />
                    <>
                        {videos.map((item, id) =>



                            isList ?

                                <div
                                    key={id}>
                                    <iframe width="200" height="200" src={"https://www.youtube.com/embed/" + item.id.videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    <p>{item.snippet.title}</p>
                                    {console.log(1)}
                                </div>
                                : <table>
                                    <td>
                                    <tr key={id}>
                                        
                                        <iframe width="200" height="200" src={"https://www.youtube.com/embed/" + item.id.videoId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    {/* {item.snippet.title}   */}
                                        
                                    </tr>
                                    </td>
                                  
                                </table>



                        )}
                    </>
                </div>

            </div>
        </>
    )
}

export default Videos;
