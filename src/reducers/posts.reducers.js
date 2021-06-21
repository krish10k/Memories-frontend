import { postsConstants } from "../actions/constants";

const initState={
    error:null,
    posts:[],
    loading:false
}

export default(state=initState,action)=>{
    switch(action.type){
       case postsConstants.GET_POSTS_BY_CATEGORY_REQUEST:
           state={
               ...state,
               loading:true
           }
           break;
        case postsConstants.GET_POSTS_BY_CATEGORY_SUCCESS:
            state={
                ...state,
                posts:action.payload.posts,
                
            }   
            break;
         case postsConstants.GET_POSTS_BY_CATEGORY_FAILUREs:
             state={
                 ...state,
                 loading:false,
                 message:action.payload.error
             }
             break;
         
         
    }
    console.log(state)
    return state;
 
}