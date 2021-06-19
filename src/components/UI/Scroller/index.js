import React from 'react'
import './scroller.css'
import { Link } from 'react-router-dom'
import { Container } from '@material-ui/core';
/**
* @author
* @function Scroller
**/

const Scroller = (props) => {
  return (
    <>  <Container >
      <section>
        <header>
          <h2>Your memories... &amp; </h2>
          {/* <h3>Popular with similar viewers</h3> */}
        </header>
        <ul className="horizontal-media-scroller">
          <li><Link to="/"><figure>
            <picture>
              <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?1" />
            </picture>
            <figcaption>Legends bruhhh hbunbju hbjbnj bhbhjb bhybj hbhbjn hbhbh
            </figcaption>
          </figure></Link></li>
          <li><Link to="/"><figure>
            <picture>
              <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?2" />
            </picture>
            <figcaption>The Family</figcaption>
          </figure></Link></li>
          <li><Link to="/"><figure>
            <picture>
              <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?3" />
            </picture>
            <figcaption>Almost Family</figcaption>
          </figure></Link></li>
          <li><Link to="/"><figure>
            <picture>
              <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?4" />
            </picture>
            <figcaption>The Strain</figcaption>
          </figure></Link></li>
          <li><Link to="/"><figure>
            <picture>
              <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?1" />
            </picture>
            <figcaption>Legends</figcaption>
          </figure></Link></li>
          <li><Link to="/"><figure>
            <picture>
              <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?2" />
            </picture>
            <figcaption>The Family</figcaption>
          </figure></Link></li>
          <li><Link to="/"><figure>
            <picture>
              <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?3" />
            </picture>
            <figcaption>Almost Family</figcaption>
          </figure></Link></li>
          <li><Link to="/"><figure>
            <picture>
              <img alt="A placeholder image" loading="lazy" src="https://picsum.photos/500/500?4" />
            </picture>
            <figcaption>The Strain</figcaption>
          </figure></Link></li>
        </ul>
      </section>
    </Container>

    </>
  )

}

export default Scroller