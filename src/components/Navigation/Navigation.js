import React, { Component } from 'react';
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <div id="navigation" className="Navigation">
        <nav>
          <a href="#airing">Phim đang chiếu</a>
          <a href="#schedule">Lịch chiếu</a>
        </nav>
      </div>
    );
  }
}

export default Navigation;