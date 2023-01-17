import React, { useEffect, useState } from "react";

const API = "AIzaSyDcK9w4zvw4FE4ZXc1o_qYjdtQjrhtRlBc";

let fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet,id&order=date&maxResults=5`

export const YTvideo = () => {

    const [allVideo, setAllVideo] = useState([])

    useEffect(() => {
        fetch(fetchurl)
            .then((response) => response.json())
            .then((resJson) => {
                const result = resJson.items.map((doc) => ({
                    ...doc,
                    Videolink: "https://www.youtube.com/embed/" + doc.id.videoId
                }))
                setAllVideo(result)

            })
    }, [])
    console.log(allVideo);
    return (
        <div>
            {allVideo.map((item) => {
                return (
                    <div>
                        <iframe width="200" height="200" src={item.Videolink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  <p>{item.snippet.title}</p>
                    </div>
                )
            })}
        </div>
    )
};