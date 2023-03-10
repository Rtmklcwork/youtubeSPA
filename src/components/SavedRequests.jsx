import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MyModal from '../utils/MyModal'
import MyForm from './MyForm'

const SavedRequests = () => {
  const requests = useSelector(state => state.requests.requests)
  const [modalActive, setModalActive] = useState(false)
  console.log(requests);
  return (
    <div>
      {console.log(requests)
      }
      {requests.map((item) => {
        return (
          <div>
            <button onClick={()=> setModalActive(true)}>{item}</button>
          </div>
          

        )
      })}
      <MyModal
      active={modalActive}
      setActive={setModalActive}
      >
        <MyForm/>
      </MyModal>
    </div>
  )
}

export default SavedRequests
