import React from 'react'

import { useSelector } from 'react-redux'

const Saved = () => {
    const savedVideo = useSelector((state) => state.saved.savedVideos)
    return (

        <div>
          {savedVideo}
        </div>
    )
}

export default Saved
