import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


@connect(state => ({
  product: state.app.get('product'),
}))
export default class Sidebar extends Component {
  static propTypes = {
    product: PropTypes.array,
  }

  render() {
    const { product } = this.props;

    return (
      <aside className='sidebar grid col-3'>
        <div className='sidebar__product-details col-12'>
          <div className='sidebar__image'>
            <img src={ product[0].image } alt={ product[0].title } />
          </div>
          <div className='u-center-h-block grid justify-content-center col-12'>
            <h2 className='product-details--main'>{ product[0].title }</h2>
            <h3 className='product-details--sub'>{ product[0].subtitle }</h3>
          </div>
          <div className='product-tags'>
            { product[0].tags.map(item => {
              return (
                <div className='btn'><p>{ item }</p></div>
              )
            })}
          </div>
          <nav className='sidebar-nav'>
            <ul>
              <li>
                <NavLink
                  to='/'
                  className='sidebar-nav__item'
                >
                    Overview
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/'
                  className='sidebar-nav__item--active'
                  activeClassName='sidebar-nav__item--active'
                >
                    Sales
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
  }
}
