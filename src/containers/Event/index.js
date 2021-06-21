import React, { useEffect } from 'react'
import { useDispatch,useSelector  } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPostByCategory } from '../../actions/posts.actions';
import Layout from '../Layout';
/**
* @author
* @function Event
**/

const Event = (props) => {
    const dispatch=useDispatch();
    useEffect(()=>{
        const payload={
            params:"event"
        }
        dispatch(getPostByCategory(payload))
    })
    const post=useSelector(state=>state.post)
  return(
    <>
     <Layout /> 
     <section className="scroll-box">
  <header>
    <h2>Events</h2>
  </header>
  <ul className="horizontal-media-scroller">
  {
      post.posts.map(pos=>(
    <li><Link to ="/home" ><figure>
          <picture>
          {/* {pos.postImg.map(imga=>(
          <img alt="A placeholder image" loading="lazy" src={imga.url} />
          ))} */}
           {
          <img alt="A placeholder image" loading="lazy" src={pos.postImg[0].url} />
        }
          </picture>
          <figcaption>{pos.title}</figcaption>
          <p>{pos.description}</p>
        </figure></Link></li>
        ))
      }
  </ul>
</section> 


    {/* <h1>Events</h1>
     {
      post.posts.map(pos=>(
        <div>
        <h1>{pos.title}</h1>
        {
          <img alt="A placeholder image" loading="lazy" src={pos.postImg[0].url} />
        }
        <h2>{pos.description}</h2>
        </div>
      ))
    } */}
   
       
       </>
         
         



   
   )

 }

export default Event