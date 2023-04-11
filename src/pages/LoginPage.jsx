import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';



const LoginPage = () => {
    return (
        <div>
            {/* <h1 className={s.title}>Login</h1> */}
            <Login />
            <p>
                or <Link to='/register'>Register</Link>
            </p>
        </div>
    )
}

export default LoginPage