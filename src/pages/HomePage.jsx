import React from 'react'
import { Redirect } from 'react-router-dom';
import {useAuth} from '../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import Videos from '../components/Videos';
import App from '../components/Tabs';
import Saved from '../components/Saved';


const HomePage = () => {
    const dispatch = useDispatch();

    const {isAuth, email} = useAuth();
    return isAuth ? (
        <div>
            <App/>
          <Saved/>

            <button onClick={()=> dispatch(removeUser())}>
                Log out from {email}
            </button>
        </div> 
    ) : (
        <Redirect to="/login" />
    )
}

export default HomePage;