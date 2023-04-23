import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MyModal from '../utils/MyModal'
import MyForm from './MyForm'
import { setRequests } from '../store/slices/userSlice'
import { deleteRequest } from '../store/slices/userSlice'



const SavedRequests = ({ setActiveKey }) => {
  const requests = useSelector(state => state.user.requests)
  const userData = useSelector(state => state.userData.userData)
  const uid = useSelector(state => state.user.id)
  const [modalActive, setModalActive] = useState('')

  console.log(userData);






  const dispatch = useDispatch()



  return (
    <div>
      {requests?.map((item, index) => {
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
