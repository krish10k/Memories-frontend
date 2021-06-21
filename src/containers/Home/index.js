import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Scroller from '../../components/UI/Scroller'
import Layout from '../Layout'
import "./styles.css"

/**
* @author
* @function Home
**/

const Home = (props) => {
  const sign = useSelector(state => state.sign)
  return (
    <>
    <Layout>
    <div className="scroll-box">
    
      <Scroller />
      </div>
      {/* <Link to ="/upload"><button className="material-icons floating_button">ADD</button></Link> */}
    </Layout>
    </>
    

      
    
    
  )
}

export default Home