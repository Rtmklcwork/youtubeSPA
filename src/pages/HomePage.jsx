import React from 'react'
import { Redirect } from 'react-router-dom';
import {useAuth} from '../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import App from '../components/Tabs';



const HomePage = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();
    return isAuth ? (
        <div>
            <App/>
         

            <button className='lgn_btn'
             onClick={()=> dispatch(removeUser())}>
                Log out from {email}
            </button>
        </div> 
    ) : (
        <Redirect to="/login" />
    )
}

export default HomePage;