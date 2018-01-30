import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

// Components
import SummaryList from './SummaryList';

// Utils
import returnMonth from '../../js/utils/dateFormat';

@connect(state => ({
  product: state.app.get('product'),
}))
export default class Overview extends Component {
  static PropTypes = {
    product: PropTypes.array,
  }

  render() {
    return (
      <div className='grid col-8 overview'>
        <div className='overview__chart'>
          <h2 className='chart-heading'> Retail Sales </h2>
          <VictoryChart
            theme={ VictoryTheme.grayscale }
          >
            <VictoryLine
              interpolation='natural'
              scale='time'
              samples={ this.props.product[0].sales.length }
              style={ {
                data: {
                  stroke: '#6666ff',
                  strokeWidth: 1
                },
                labels: { fontSize: 12 },
                legend: { gutter: 5 },
                parent: { border: '1px solid #ccc' }
              } }
              data={ this.props.product[0].sales.map(item => {
                return { x: returnMonth(item.weekEnding), y: item.unitsSold };
              }) }
              />
            </VictoryChart>
        </div>

        <SummaryList { ...this.props } />
      </div>
    );
  }
}
