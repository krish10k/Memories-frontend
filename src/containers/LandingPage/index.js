import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import CModal from '../../components/Signup/CModal';
import Lmodal from '../../components/Login/login';
import Layout from '../../containers/Layout'
import Header from "./Header";
import Div1 from "./Div-1";
import Div2 from "./Div-2";
import Div3 from "./Div-3";
import './style.css'

/**
* @author
* @function LandPage
**/
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
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

const LandPage= (props) => {
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
    {/* <Layout />
    
       <Header /> */}
       <h1>Memoriae</h1>
       
    <Container>
        <Button onClick={showModal}>
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

export default LandPage








// const Button = styled.button`
//   min-width: 100px;
//   padding: 13px 26px;
//   border-radius: 4px;
//   border: none;
//   background-color:purple;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
// `;

// const LandPage = (props) => {
//   const [modal, setModal] = useState(false);
//   const [lmodal, setLmodal] = useState(false);
//   const showModal = () => {
    
//     setModal(prev => !prev)
    
    
//   }
//   const showLmodal = () => {
   
//     setLmodal(prev => !prev)
//   }
//   return (
//     <div >
     
//  <Container > 
//  <Layout/>
//    <div id="cont">
//         <Header />
//         <Div1 />
//         <Div2 />
//         <Div3 />
      

//         <Button onClick={showModal}>
//             SignUp
//         </Button>
//         <CModal modal={modal} setModal={setModal} />
        
//         <Button onClick={showLmodal}>
//             Login
//         </Button>
//         <Lmodal lmodal={lmodal} setLmodal={setLmodal} />
//         </div>
//         </Container>
//     </div>
//   )

// }

// export default LandPage
