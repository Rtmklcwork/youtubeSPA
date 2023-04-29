import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import s from './LoginPage.module.css'



const LoginPage = () => {
    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>YouTube SPA by Rtmklc</h1>
            <Login />
            <p>
            or <Link className={s.link} to='/register'>Register</Link>
            </p>
               
            
        </div>
    )
}

export default LoginPage