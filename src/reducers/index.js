import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import signReducers from "./sign.reducers";

const rootReducer=combineReducers({
    auth:authReducers,
    sign:signReducers
});

export default rootReducer;