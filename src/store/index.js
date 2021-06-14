import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const store=createStore(rootReducer,applyMiddleware(thunk))

export default store;


// import {applyMiddleware, createStore} from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from "../reducers";
// import  thunk  from "redux-thunk";

// const store=createStore(rootReducer,composeWithDevTools(
//     applyMiddleware(thunk)
//     ));
  

// export default store;