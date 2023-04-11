import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MyModal from '../utils/MyModal'
import MyForm from './MyForm'
import { deleteRequest } from '../store/slices/requestsSlice'
import { addUserData } from '../store/slices/userDataSlice'



const SavedRequests = ({ setActiveKey }) => {
  const requests = useSelector(state => state.requests.requests)
  const uid = useSelector(state => state.user.id)
  const uidRequests = useSelector(state => state.userData.userData)
  const [modalActive, setModalActive] = useState('')
  console.log(111, uid);
  console.log(222, requests);
  console.log(333, uidRequests);


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addUserData({ uID: uid, requests: [...requests] }))
  }, [uid])

  return (
    <div>

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
