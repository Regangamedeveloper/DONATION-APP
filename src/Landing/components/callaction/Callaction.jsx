import React from 'react'
import './callaction.scss';

const Callaction = () => {
  return (
    <div className="action-container">
     <div className="image-action">
        {/* <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.compassion.com%2Fmultimedia%2Fmake-a-donation-children-in-togo.jpg&f=1&nofb=1&ipt=8190a21f6f92780c2bc40b67dec3b332cb125e1b27cf6eed01e464a27afa2419&ipo=images" alt="" /> */}
        <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Qq5vB82Y8-8" 
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  rel="0" // This is the key addition
></iframe>
     </div>

     <div className="info-action">
        <h1> save the Support Those That Are Impacted</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis sint vel aliquam iste consectetur, facilis sit, quae doloribus, molestias enim illo corporis facere amet cum voluptates officia sequi deserunt. Quae veniam eligendi est nesciunt? Harum optio libero rerum fugit?</p>
    <div className="action-button">
    <button>Get involved</button>
    <button>Donate</button>
    </div>
     </div>

    </div>
  )
}

export default Callaction