import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Component
// import Loading from '../../components/Loading';

@connect(state => ({
}))
export default class Overview extends Component {
  // static propTypes = {
  //   dispatch: PropTypes.func,
  // }

  render() {
    // const { } = this.props;

    return (
      <div>
        <p>This is a thing</p>
      </div>
    );
  }
}
