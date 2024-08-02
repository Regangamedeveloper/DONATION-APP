import React, { useState, useRef } from 'react';
import './mediacover.scss'; // Import your SCSS file
const MediaCover = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null); 

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.contentWindow.postMessage(
        '{"event": "command", "func": "pauseVideo"}', 
        "*" // Target origin: Allow all
      ); 
    } else {
      videoRef.current.contentWindow.postMessage(
        '{"event": "command", "func": "playVideo"}', 
        "*" // Target origin: Allow all
      );
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="mediacover">
      <div className="story-item">
        <img src="https://www.unhcr.org/africa/sites/afr/files/styles/landscape_10/public/RF1291882_0.webp?itok=TXwDzFWh" alt="Descriptive alt text for image 1" />
        <div className="story-text">
          <h2>Resilience in Karamoja:  A Community Thriving Amidst Challenges</h2>
          <p>The people of Karamoja, Uganda, have a long history of resilience.  This image shows Karamojong women tending to their garden, showcasing their strength and dedication to providing for their families despite the unique challenges they face.  They are a community with a rich culture and a strong spirit of self-reliance</p>
        </div>
      </div>

      <div className="story-item">
        {/* YouTube Embed Code */}
        <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Qq5vB82Y8-8" 
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
  ref={videoRef}
  rel="0" // This is the key addition
></iframe>
        <div className="story-text">
          <h2>From Conflict to Hope:  ADRA's Support for DRC Refugees in Uganda</h2>
          <p>Witness the journey of resilience as Congolese refugees, displaced by conflict, find a new beginning with the help of ADRA in Uganda.  This video highlights their stories, their challenges, and the vital support provided by ADRA to help them rebuild their lives.</p>
        </div>
      </div>

    </section>
  );
};

export default MediaCover;