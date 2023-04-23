
import { useAuth } from '../hooks/use-auth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';
import { Navigate } from 'react-router-dom';
import Tabs1 from '../components/Tabs'




const HomePage = () => {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();
    return isAuth ? (
        <div className='lgn'>
          <Tabs1/>

            <button className='lgn_btn'
                onClick={() => dispatch(removeUser())}
                >
                Log out from {email}
            </button>

        </div>
    ) : (<Navigate to='/login' />
    )

}

export default HomePage;