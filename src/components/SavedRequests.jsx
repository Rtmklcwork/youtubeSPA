import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MyModal from '../utils/MyModal'
import MyForm from './MyForm'
import { deleteRequest } from '../store/slices/requestsSlice'

const SavedRequests = ({ setActiveKey }) => {
  const requests = useSelector(state => state.requests.requests)
  const [modalActive, setModalActive] = useState('')
 ;
  

  const dispatch = useDispatch()


  return (
    <div>
      {console.log(requests)
      }
      {requests.map((item, index) => {
        return (
          <div key={index}

          >
            <button style={{ width: 200 }} onClick={() => setModalActive(item)}>{item}</button>
            <button onClick={() => dispatch(deleteRequest(item))}>delete</button>

          </div>


        )
      })}
      <MyModal
        active={!!modalActive}
        setActive={setModalActive}
      >
        <MyForm
         
          setActiveKey={setActiveKey}
          setActive={setModalActive}
          item={modalActive} />
      </MyModal>

    </div>
  )
}

export default SavedRequests
