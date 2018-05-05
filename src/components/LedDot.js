import React, { Component } from 'react';
import './LedDot.css';

class LedDot extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      this.className = [this.props.className,  "Led-Dot"].join(" ");
      return (
        <div className={this.className}>
        </div>
      );
    }
  }
  
  export default LedDot;