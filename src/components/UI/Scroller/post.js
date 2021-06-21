import React from 'react'
import { Link } from 'react-router-dom';
import './scroller.css';

/**
* @author
* @function Scroller2
**/

const Posts = (props) => {
  return(
    <>
    <section className="scroll-box">
  {/* <header>
    <h2>{props.header}</h2>
  </header> */}
  <ul className="horizontal-media-scroller">
    <li><Link to ="/home" ><figure>
          <picture>
          <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?26" />
          </picture>
          <figcaption>{props.title}</figcaption>
        </figure></Link></li>

  </ul>
</section> 
    </>
   )

 }

export default Posts