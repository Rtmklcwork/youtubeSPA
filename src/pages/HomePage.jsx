import React from 'react'
// import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import App from '../components/Tabs';
import { Navigate } from 'react-router-dom';


// const HomePage = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate()

//     const { isAuth, email } = useAuth();
//     return isAuth ? (
//         <div>
//             <App />


//             <button className='lgn_btn'
//                 onClick={() => dispatch(removeUser())}>
//                 Log out from {email}
//             </button>
//         </div>
//     ) : (navigate('/login')
//     )

// }


const HomePage = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate()

    const { isAuth, email } = useAuth();
    return isAuth ? (
        <div className='lgn'>
            <App />

            <button className='lgn_btn'
                onClick={() => dispatch(removeUser())}>
                Log out from {email}
            </button>
            
        </div>
    ) : (<Navigate to = '/login' />
    )

}

export default HomePage;