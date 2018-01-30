import React, { Component } from 'react';
import { connect } from 'react-redux';
import Routes from 'config/routes';
import PropTypes from 'prop-types';

import Menu from 'components/Global/Menu';
import Sidebar from 'components/Sidebar';


@connect(state => ({
  product: state.app.get('product'),
}))
export default class App extends Component {
  static propTypes = {
    product: PropTypes.array,
  }

  render() {
    return (
      <div className='grid col-12 main'>
        <Menu { ...this.props } />

        <div className='app grid col-12'>
          <Sidebar { ...this.props } />
          <Routes />
        </div>
      </div>
    );
  }
}
