import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MyModal from '../../utils/MyModal'
import MyForm from '../myform/MyForm'
import deleteRequest from '../../store/slices/userSlice'
import s from './SavedRequests.module.css'
import {CloseOutlined} from '@ant-design/icons'


const SavedRequests = ({ setActiveKey }) => {
  const requests = useSelector(state => state.user.requests)
  console.log();
 
 

  const [modalActive, setModalActive] = useState('')








  const dispatch = useDispatch()



  return (
    <div>

      {requests?.map((item, index) => {
        return (
          <div key={index}

          >
            <button className={s.requests} onClick={() => setModalActive(item)}>{item}</button>
            <button className={s.delete_btn} onClick={() => dispatch(deleteRequest(item))}><CloseOutlined/></button>

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
