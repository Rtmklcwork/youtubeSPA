import React from 'react';
import { useDispatch } from 'react-redux';
import Form from '../form/Form'
import { setUser } from '../../store/slices/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }))
                navigate('/');
            })
            .catch(console.error)
    };


    return (
        <div className='lgn'>
            <Form
                title='Register'
                handleClick={handleRegister}
            />
        </div>
    )
}

export default SignUp
