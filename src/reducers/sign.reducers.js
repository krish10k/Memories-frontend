import { loginconstants, signupconstants } from "../actions/constants";

const initState={
    token:null,
    user:{
        displayName:'',
        email:''
    },
    authenticate:false,
    authenticating:false,
    loading:false,
    error:null,
    message:""
};

export default(state=initState,action)=>{
    console.log(action);
    switch(action.type){
        case signupconstants.SIGNUP_REQUEST:
            state={
                ...state,
                loading:true
            }
            break;
        case signupconstants.SIGNUP_SUCCESS:
            state={
                ...state,
                token:action.payload.token,
                user:action.payload.user,
                authenticate:true,
                authenticating:false
            }
            break;
            case signupconstants.SIGNUP_FAILURE:
                state={
                    ...state,
                    error:action.payload.error,
                    loading:false
                }  
                break;
            case loginconstants.LOGIN_REQUEST:
                state={
                    ...state,
                    loading:true
                }
                break;
            case loginconstants.LOGIN_SUCCESS:
                state={
                    ...state,
                    token:action.payload.token,
                    user:action.payload.user,
                    authenticate:true,
                    authenticating:false
                }
                break;
            case loginconstants.LOGIN_FAILURE:
                state={
                    ...state,
                    error:action.payload.error,
                    loading:false
                } 
                break;
    }
    console.log(state)
    return state;
}