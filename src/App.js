
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LandPage from './containers/LandingPage';
import Home from './containers/Home';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isUserLoggedIn } from './actions';
import Card from './components/UI/Card';
import Scroller from './components/UI/Scroller';
import Travel from './containers/Travel';
import Event from './containers/Event';
import College from './containers/College';
import UploadPost from './components/UI/Form';
import Profile from './containers/Profile';

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
       <Route path="/memo" component={Scroller} />
        
         <Route path="/home" component={Home} />
         <Route path="/travel" component={Travel} />
         <Route path="/event" component={Event} />
         <Route path="/college" component={College} />
         <Route path="/upload" component={UploadPost} />
         <Route path="/profile" component={Profile} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
