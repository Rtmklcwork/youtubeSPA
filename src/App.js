import {
  Switch,
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
   return (
    <Switch>

      {/* <Route exact path="" component={}></Route> */}
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/login" component={LoginPage}></Route>
      <Route exact path="/register" component={RegisterPage}></Route>
      <Route exact path="/saved" component={SavedRequests}></Route>
      <Route exact path="/home" component={Videos}></Route>
      <Route exact path="/tabs" component={Tabs1}></Route>

    </Switch>
  );
}

export default App;
