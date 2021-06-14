
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LandPage from './containers/LandingPage';
import Home from './containers/Home';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './actions';

function App() {
  const dispatch=useDispatch();
  const sign=useSelector(state=>state.sign)
  useEffect(()=>{
    if(!sign.authenticate){
      dispatch(isUserLoggedIn())
    }
  },[sign.authenticate])
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route path="/" exact component={LandPage} />
         <Route path="/home" exact component={Home} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
