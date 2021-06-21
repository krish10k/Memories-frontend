import React,{ useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import '../styles.css';
import { Redirect } from "react-router-dom";
import undraw_moments_0y20  from '../../assets/undraw_moments_0y20.svg'
import { useSpring,animated } from 'react-spring';
import { useDispatch, useSelector } from 'react-redux';
import useLform from './useLform';
import validate from './validateLinfo';


/**
* @author
* @function Lmodal
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


const Lmodal = (props) => {
    const{lmodal,setLmodal}=props;
    const modalRef = useRef();
  const dispatch=useDispatch();
  const{handleChange,values,handleSubmit,errors}=useLform(validate);
  const sign=useSelector(state=>state.sign)

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: lmodal ? 1 : 0,
    transform: lmodal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setLmodal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && lmodal) {
        setLmodal(false);
        console.log('I pressed');
      }
    },
    [setLmodal, lmodal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  if(sign.authenticate){
    return <Redirect to={'/home'}/>
}

// if(!sign.authenticate){
//   return <Redirect to={'/'}/>
// }
   
  return(
      <>
      {lmodal?(
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={lmodal}>              
              <ModalImg src={undraw_moments_0y20} />
              <ModalContent>
              
              <form onSubmit={handleSubmit} className='form' noValidate>
              <h1>
                  <b>WELCOME BACK AMIGO!!</b>
              </h1>
        <h1>
          <b>MEMORIES</b> are Timeless Treasures Of The Heart :) Login to create memories! 
        </h1>              
    
        
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
        
        <button className='form-input-btn' type='submit'>
          Login
        </button>
        <span className='form-input-login'>
          
         
        </span>
      </form>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setLmodal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
  
      ):null}
     </>
   );

 }

export default Lmodal