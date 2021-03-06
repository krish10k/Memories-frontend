import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import CModal from '../../components/Signup/CModal';
import Lmodal from '../../components/Login/login';
import './style.css' 
/**
* @author
* @function Signon

**/
const Container = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  height: 10vh;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 13px 26px;
  border-radius: 4px;
  border: none;
  background-color:purple;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const Signon= (props) => {
 const[modal,setModal]=useState(false);
 const [lmodal,setLmodal]=useState(false);
 const showModal=()=>{
     setModal(prev=>!prev)
 }
const showLmodal=()=>{
  setLmodal(prev=>!prev)
}
  return(
    <div>
    <Container>
        <Button onClick={showModal} className="b1">
            SignUp
        </Button>
        <CModal modal={modal} setModal={setModal} />
        <Button onClick={showLmodal}>
            Login
        </Button>
        <Lmodal lmodal={lmodal} setLmodal={setLmodal} />
    </Container>
    </div>
   )

 }

export default Signon;
