import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import SummaryListItem from './SummaryListItem';

export default class SummaryList extends Component {
  static PropTypes = {
    product: PropTypes.array,
  }

  render() {
    const { product } = this.props;
    console.log(this.props, 'SLI');
    return (
      <section className='grid summary-list col-12'>
        <div className='
            col-12
            grid
            align-content-space-around
            justify-space-between
            u-center-v-flex
            campaign-list__row
          '
        >
          <div className='grid col-12 justify-space-around align-end'>
            <div className='col-12 summary-list__item'>
              <h5 className='col-2 summary-list__title u-center-text'>Week Ending</h5>
              <h5 className='col-2 summary-list__title u-center-text'>Retail Sales</h5>
              <h5 className='col-2 summary-list__title u-center-text'>Wholesale Sales</h5>
              <h5 className='col-2 summary-list__title u-center-text'>Units Sold</h5>
              <h5 className='col-2 summary-list__title u-center-text'>Retailer Margin</h5>
            </div>
            { product && (
              product[0].sales.map(item => <SummaryListItem key={ `cli_${ item.weekEnding }` } { ...item } />)
            )}
          </div>
        </div>
      </section>
    );
  }
}
