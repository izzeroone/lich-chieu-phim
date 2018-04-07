import React, { Component } from 'react';
import HeroButton from './../HeroButton/HeroButton'
import './Hero.css'
class Hero extends Component {
  render() {
    return (
      <div id="hero" className="Hero" style={{backgroundImage: 'url(https://initiate.alphacoders.com/download/wallpaper/901312/images2/png/1862267038)'}}>
        <div className="content">
          <img className="logo" src="https://vignette.wikia.nocookie.net/darling-in-the-franxx/images/c/c9/Logo.png/revision/latest?cb=20180303044614" alt="darling background" />
          <h2>Episodes 12 now avaiable </h2>
          <p>In a world where future where humanity has been driven to endangerment by giant beasts, a strike force is assembled to destroy the monsters and save the world.</p>
          <div className="button-wrapper">
            <HeroButton primary={true} text="Watch now" />
            <HeroButton primary={false} text="+ My list" />
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    );
  }
}

export default Hero;