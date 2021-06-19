import { postsConstants } from "./constants";
import axios from "../helpers/axios";

const getPosts = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: postsConstants.GET_POSTS_REQUEST });
        const res = await axios.get(`posts/getPosts`);
        if (res.status === 200) {
          const { posts } = res.data;
          dispatch({
            type: postsConstants.GET_POSTS_SUCCESS,
            payload: { posts },
          });
        } else {
          dispatch({ type: postsConstants.GET_POSTS_ERROR });
        }
       
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  export const addPost = (form) => {
    return async (dispatch) => {
      try {
        dispatch({ type: postsConstants.ADD_POSTS_REQUEST });
        const res = await axios.post(`/posts/create`, form);
        if (res.status === 201) {
          dispatch({ type: postsConstants.ADD_POSTS_SUCCESS })
          dispatch(getPosts());
        } else {
          dispatch({ type: postsConstants.ADD_POSTS_ERROR });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
