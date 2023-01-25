import React from 'react'
import { useSelector } from 'react-redux'

const SavedText = () => {
    const text1 = useSelector((state)=>state.inputText.text)
  return (
  
    <div>
      {text1}
    </div>
  )
}

export default SavedText
