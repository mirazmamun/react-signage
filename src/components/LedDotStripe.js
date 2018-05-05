import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './LedDotStripe.css';
import LedDot from './LedDot';

class LedDotStripe extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      let dots = [];
      console.log(this.props.stripe);
      this.props.stripe.forEach( (dot, idx) => { dots.push(<LedDot key={idx} className={ dot === 1 ? 'Active' : 'Inactive' }/>); })
      return (
        <div className="Led-Dot-Stripe">
          {dots}
        </div>
      );
    }
  }
  LedDotStripe.propTypes = {
    stripe: PropTypes.array
  };
  export default LedDotStripe;