
import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../actions";
import imag from "./emoji.png";

import "./profile.css";

/**
* @author
* @function Profile
**/

const Profile = (props) => {
    const sign=useSelector(state=>state.sign)
    const dispatch=useDispatch()
    const logout=()=>{
        dispatch(signout())
    }
  return(
    <Container className="mbod" fluid>
    <Row>
      <Col className="sideimg" xs={12} lg={6}>
        <img src={imag} className="imgm" />
      </Col>
      <Col xs={12} lg={6}>
        <br />
        <div className="usern" style={{ fontWeight: "bold" }}>
          {sign.user.displayName}
        </div>
        <br />
        <div className="eid">{sign.user.email}</div>
        <br />
        <br />
        <br />
        <button onClick={logout} type="button" className="b1">
         Signout
          <img src="https://cdn.discordapp.com/attachments/814267997577019402/855872133959254056/arrow.png" />
        </button>
        <br />
      </Col>
    </Row>
  </Container>

   )

 }

export default Profile