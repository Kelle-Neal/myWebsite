import React from 'react';
import LandingPic from '../img/backgrounds/Landing.png';

function Home() {
  return (
    <>
      <div id="home">
        <img
          alt="Kelle"
          src={ LandingPic }
          // width="auto"
          className= 'img-responsive'
          // position= 'center'
          width= '100%'
        />  
      </div>
    </>
  );
}

export default Home;
