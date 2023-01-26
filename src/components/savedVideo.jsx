import React from 'react'
import { useSelector } from 'react-redux'

const SavedVideo = () => {
    const savedRequests = useSelector((state)=> state)
    console.log(savedRequests);
  return (
    <div>
      Hello 
    </div>
  )
}

export default SavedVideo
