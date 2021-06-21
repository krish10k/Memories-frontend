import axios from "../helpers/axios";

import { googleauthconstants, loginconstants, logoutconstants, signupconstants } from "./constants"

export const authgoogle=()=>{
    return async(dispatch)=>{
        dispatch({type:googleauthconstants.AUTHGOOGLE_REQUEST});
        const res=await axios.get("/auth/google")
        if(res.status===200){
            const{token,displayName}=res.data
            console.log(token);
            console.log(displayName)
        }
    }
}

export const signup=(user)=>{
    console.log(user)
    return async(dispatch)=>{
        dispatch({type:signupconstants.SIGNUP_REQUEST});
        console.log("hello")
        const res=await axios.post('/auth/signup',{...user})
        console.log(res)
        if(res.status===200){
            const{token,user}=res.data;
            localStorage.setItem('token',token)
            localStorage.setItem('user',JSON.stringify(user))
            dispatch({
                type:signupconstants.SIGNUP_SUCCESS,
                payload:{
                    token,user
                }
            });
        }else{
            if(res.status===400){
                dispatch({
                    type:signupconstants.SIGNUP_FAILURE,
                    payload:{error:res.data.error}
                })
            }
        }
    }
}

export const login=(user)=>{
   return async(dispatch)=>{
       dispatch({type:loginconstants.LOGIN_REQUEST})
       const res=await axios.post('/auth/login',{...user})
       if(res.status===200){
           const{token,user}=res.data
           localStorage.setItem('token',token)
           localStorage.setItem('user',JSON.stringify(user))
           dispatch({
               type:loginconstants.LOGIN_SUCCESS,
               payload:{
                   token,user
               }
           })
       }else{
           dispatch({
            type:loginconstants.LOGIN_FAILURE,
            payload:{error:res.data.error}
           })
       }
   }
}

export const isUserLoggedIn=()=>{
    return async dispatch=>{
        const token=localStorage.getItem('token');
        console.log(token)
        if(token){
            const user=JSON.parse(localStorage.getItem('user'));
            dispatch({
                type:loginconstants.LOGIN_SUCCESS,
                payload:{
                    token,user
                }
            });
        }else{
            dispatch({
                type:loginconstants.LOGIN_FAILURE,
                payload:{error:'failed to login'}
            });
        }
    }
}


export const signout=()=>{
    return async dispatch=>{

        dispatch({
            type:logoutconstants.LOGOUT_REQUEST
        })
       const res=await axios.post('/auth/signout');
       if(res.status===200){
        localStorage.clear();
        dispatch({
            type:logoutconstants.LOGOUT_SUCCESS
        });
       }else{
        dispatch({
            type:logoutconstants.LOGOUT_FAILURE,
            payload:{error:res.data.error}
        });
       }

        
    }
}