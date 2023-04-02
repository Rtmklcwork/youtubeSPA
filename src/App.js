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
import { useParams } from 'react-router-dom';

function App() {
  const {id} = useParams()
  console.log(111, id);
 ;
  return (
   
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/saved' element={<SavedRequests />} />
      <Route path='/tabs/:id' element={<Tabs1 />} />
      <Route path='/videos' element={<Videos />} />
    </Routes>



  );
}

export default App;
