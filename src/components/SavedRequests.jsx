import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import MyModal from '../utils/MyModal'
import MyForm from './MyForm'

const SavedRequests = () => {
  const requests = useSelector(state => state.requests.requests)
  const [modalActive, setModalActive] = useState('')

  return (
    <div>
      {console.log(requests)
      }
      {requests.map((item) => {
        return (
          <div key={item.id}>
            <button onClick={() => setModalActive(item)}>{item}</button>
          </div>


        )
      })}
      <MyModal
        active={!!modalActive}
        setActive={setModalActive}
      >
        <MyForm
          setActive={setModalActive}
          item={modalActive} />
      </MyModal>
      {/* <FiltredVideos/> */}
    </div>
  )
}

export default SavedRequests
