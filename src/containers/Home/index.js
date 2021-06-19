import React from 'react'
import { useSelector } from 'react-redux'
import Scroller from '../../components/UI/Scroller'
import Layout from '../Layout/Navbar'
import "./styles.css"

/**
* @author
* @function Home
**/

const Home = (props) => {
  const sign = useSelector(state => state.sign)
  return (
    <>
<Layout />
      <br/><br/>   <br/><br/>
      <div className="scroll-box">
      <Scroller />
      </div>
        {/* Welcome {sign.user.displayName}  */}
      </>
    
    
  )
}

export default Home