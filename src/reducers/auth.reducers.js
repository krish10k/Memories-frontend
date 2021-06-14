import { googleauthconstants } from "../actions/constants";

const initState={
    token:null,
    displayName:'',
    authenticate:false,
    authenticating:false,
    loading:false,
    error:null,
    message:''
};

export default (state=initState,action)=>{
    console.log(action)
    switch(action.type){
        case googleauthconstants.AUTHGOOGLE_REQUEST:
            state={
                ...state,
                authenticating:true
            }
            break;
        case googleauthconstants.AUTHGOOGLE_FAILURE:
                state={
                    ...state,
                    
                   
                }
                break;
        case googleauthconstants.AUTHGOOGLE_SUCCESS:
                    state={
                        ...state,
                        loading:false,
                        message:action.payload.message
                    }            
          
            break;
    }
    return state;
}