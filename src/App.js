import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import SavedRequests from './components/SavedRequests';
import Videos from './components/Videos';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Tabs1 from './components/Tabs.jsx'


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
