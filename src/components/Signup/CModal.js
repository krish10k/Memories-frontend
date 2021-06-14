import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import useForm from './useForm';
import validate from './validateInfo';
import '../styles.css';
import { Redirect } from "react-router-dom";
import { MdClose } from 'react-icons/md';
import { useSpring,animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import { authgoogle } from '../../actions/signup.actions';
import memo1  from '../../assets/memo1.jpg'
/**
* @author
* @function CModal
**/

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  ${'' /* width: 800px; */}
  margin: 100px auto;
  width: 900px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #87CEEB;
  color: #87CEEB;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius:10px;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #FFE5B4;
`;

const ModalContent = styled.div`
  ${'' /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */}
  position:absolute;
  max-height:500px;
  line-height: 1.8;
  border-radius: 0 10px 10px 0;
  position: relative;
  background: linear-gradient(90deg,rgb(135,206,235) 100%);
  color: #141414;
 
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const CModal = (props) => {
  const{modal,setModal}=props
  const modalRef = useRef();
  const dispatch=useDispatch();
  const sign=useSelector(state=>state.sign)

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: modal ? 1 : 0,
    transform: modal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && modal) {
        setModal(false);
        console.log('I pressed');
      }
    },
    [setModal, modal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  const{handleChange,values,handleSubmit,errors}=useForm(validate);
  const authGoogle=()=>{
       dispatch(authgoogle())
  }

  if(sign.authenticate){
    return <Redirect to={'/home'}/>
}
  return(
    <>
    {modal ? (
      <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={modal}>
              <ModalImg src={memo1} />
              <ModalContent>
              
              <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          <b>MEMORIES</b> are Timeless Treasures Of The Heart :) SignUp to create memories! 
        </h1>
        <div className="goog">
        {/* <a href="http://localhost:2000/auth/google" className="btn red darken-1"> */}
        <a onClick={authGoogle} className="btn red darken-1">
        <i class="fab fa-google left"></i> Log In With Google
    </a></div>
       <p><b>OR</b></p>
    
        <div className='form-inputs'>
          {/* <label className='form-label'>Username</label> */}
          <input
            className='form-input'
            type='text'
            id="ip3"
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          {/* <label className='form-label'>Email</label> */}
          <input
            className='form-input'
            type='email'
            id="ip3"
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          {/* <label className='form-label'>Password</label> */}
          <input
            className='form-input'
            id="ip3"
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          {/* <label className='form-label'>Confirm Password</label> */}
          <input
            className='form-input'
            id="ip3"
            type='password'
            name='cpassword'
            placeholder='Confirm your password'
            value={values.cpassword}
            onChange={handleChange}
          />
          {errors.cpassword && <p>{errors.cpassword}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          
          <Link to ='/login'>Already Been Here?Login</Link>
        </span>
      </form>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
    ): null}
   
   </>
   )

 }

export default CModal