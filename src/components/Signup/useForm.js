import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../../actions';

/**
* @author
* @function useForm
**/

const useForm = (validate) => {
    const dispatch=useDispatch();
    const[values,setValues]=useState({
        username:'',
        email:'',
        password:'',
        cpassword:''
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
        dispatch(signup(user))
    }
    return{handleChange,values,handleSubmit,errors}


 }

export default useForm