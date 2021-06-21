import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostByCategory } from '../../actions/posts.actions'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../Layout';
import { Link } from 'react-router-dom';


/**
* @author
* @function Travel
**/
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Travel = (props) => {
    const dispatch=useDispatch()
   
    useEffect(()=>{
        const payload={
            params:"travel"
        }
       
        dispatch(getPostByCategory(payload))
    },[])
    const post=useSelector(state=>state.post)
   console.log(post.posts)
   const classes = useStyles();
  return(
    <>
    <Layout>
    <section className="scroll-box">
  <header>
    <h2>Travelling Memories</h2>
  </header>
  <ul className="horizontal-media-scroller">
  {
      post.posts.map(pos=>(
    <li><Link to ="/home" ><figure>
          <picture>
          {pos.postImg.map(imga=>(
          <img alt="A placeholder image" loading="lazy" src={imga.url} />
          ))}
          </picture>
          <figcaption>{pos.title}</figcaption>
          <p>{pos.description}</p>
        </figure></Link></li>
        ))
      }
  </ul>
</section> 



    {/* <h1>Travelling Memories</h1>
    {
      post.posts.map(pos=>(
        <div>
        <h1>{pos.title}</h1>
       
        <p>{pos.postImg.map(imga=>(
          <img src={imga.url}></img>
          
        ))}</p>
        <h2>{pos.description}</h2>
        </div>
      ))
    } */}
   
   </Layout>
       </>
         
         



   
 
   );

 }

export default Travel






