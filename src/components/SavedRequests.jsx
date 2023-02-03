import React from 'react'
import { useSelector } from 'react-redux'

const SavedRequests = () => {
    const requests = useSelector(state=>state.requests.requests)
  return (
    <div>
{    console.log(requests)
}
      {requests.map((item)=>{
        <div>{item}</div>
      })}
    </div>
  )
}

export default SavedRequests
