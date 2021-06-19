import { Container } from '@material-ui/core'
import React from 'react'
import Navbar from './Navbar'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Navbar/>
        <Container>
{props.children}
        </Container>
    </>
   )

 }

export default Layout