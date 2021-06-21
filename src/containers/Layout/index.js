import { Container } from '@material-ui/core'
import React from 'react'
import Navbar from './NavBar'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Navbar/>
        
{props.children}

    </>
   )

 }

export default Layout