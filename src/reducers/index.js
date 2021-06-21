import { combineReducers } from "redux";
import authReducers from "./auth.reducers";
import postsReducers from "./posts.reducers";
import signReducers from "./sign.reducers";

const rootReducer=combineReducers({
    auth:authReducers,
    sign:signReducers,
    post:postsReducers
});

export default rootReducer;