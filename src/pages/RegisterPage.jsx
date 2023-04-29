import React from 'react'
import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';
import s from './RegisterPage.module.css'

const RegisterPage = () => {
  return (
    <div className={s.wrapper}>
            <h1 className={s.title}>YouTube SPA by Rtmklc</h1>
      <SignUp/>
      <p>
        Already have an account? <Link className={s.link} to="/login">Sign in</Link>
      </p>
    </div>
  )
}

export default RegisterPage;
