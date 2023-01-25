import React from 'react'
import { useDispatch } from 'react-redux'
import SavedText from './SavedText'

const Saved = () => {
    const dispatch = useDispatch()
   
  return (
  
   <div>
    
 <form action="">
    <input type="text" 
    placeholder='input text...'
    onChange={(e)=>dispatch(e.target.value)}/>
   </form>
   <div>
   <SavedText/>
   </div>
  
   </div>
  )
}

export default Saved
