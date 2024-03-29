import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage/HomePage'
import LoginPage from './components/loginPage/LoginPage'
import RegisterPage from './components/registerPage/RegisterPage';



function App() {


  ;
  return (

    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>



  );
}

export default App;
