import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../actions';


/**
* @author
* @function useLform
**/

const useLform = (validate) => {
    const dispatch=useDispatch();
    const[values,setValues]=useState({        
        email:'',
        password:''       
    })
    const[errors,setErrors]=useState({})
    const handleChange=(e)=>{
        const{name,value}=e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setErrors(validate(values))
        const user={
            ...values
        }
        console.log(user)
        dispatch(login(user))
    }
    return{handleChange,values,handleSubmit,errors}


 }

export default useLform;