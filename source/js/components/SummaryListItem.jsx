import React from 'react';
import PropTypes from 'prop-types';

import format from '../../js/utils/numberFormat';

const SummaryListItem = (props) => {
  return (
    <div className='grid col-12 justify-space-around align-end'>
      <div className='col-12 summary-list__item'>
        <h5 className='col-2 summary-list__subtitle'>{ props.weekEnding }</h5>
        <h5 className='col-2 summary-list__subtitle'>{ `$${ format(props.retailSales) }` }</h5>
        <h5 className='col-2 summary-list__subtitle'>{ `$${ format(props.wholesaleSales) }` }</h5>
        <h5 className='col-2 summary-list__subtitle'>{ props.unitsSold }</h5>
        <h5 className='col-2 summary-list__subtitle'>{ `$${ format(props.retailerMargin) }` }</h5>
      </div>
    </div>
  );
};

SummaryListItem.propTypes = {
  weekEnding: PropTypes.string,
  retailSales: PropTypes.number,
  wholesaleSales: PropTypes.number,
  unitsSold: PropTypes.number,
  retailerMargin: PropTypes.number,
};

export default SummaryListItem;
