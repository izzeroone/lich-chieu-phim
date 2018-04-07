import React, { Component } from 'react';
import './HeroButton.css'

class HeroButton extends Component {
  render() {
    return (
      <a href="#" className="Button" data-primary={this.props.primary}>{this.props.text}</a>
    );
  }
}

export default HeroButton;