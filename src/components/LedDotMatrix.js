import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LedDotMatrix.css';
import LedDotStripe from './LedDotStripe';
import LetterMatrix from '../lib/LetterMatrix';

class LedDotMatrix extends Component {
    /**
     * Defines a property: letter
     * 
     * @param {Object} props 
     */
    constructor(props) {
      super(props);
      this.state = {};
      console.log(this.props.letter);
    }

    render() {
      let self = this;
      let dotStripes = [];
      let curMatrix = LetterMatrix.getLetterMatrix(this.props.letter);
      curMatrix.forEach( (i, idx) => { dotStripes.push(<LedDotStripe key={idx} stripe={i} />); });
      return (
        <div className="Led-Dot-Matrix">
          { dotStripes }
        </div>
      );
    }
  }
  LedDotMatrix.propTypes = {
    letter: PropTypes.string
  };
  export default LedDotMatrix;