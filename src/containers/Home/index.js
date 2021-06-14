import React from 'react'
import { useSelector } from 'react-redux'

/**
* @author
* @function Home
**/

const Home = (props) => {
    const sign=useSelector(state=>state.sign)
  return(
    <div>Welcome {sign.user.displayName} </div>
   )

 }

export default Home