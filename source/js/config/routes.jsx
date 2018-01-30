import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from 'views/NotFound';
import Overview from '../components/Overview';

const publicPath = '/';

export const routeCodes = {
  Overview: publicPath,
  SingleView: `${ publicPath }color/:id`,
};

export default () => (
  <Switch>
    <Route exact path={ publicPath } component={ Overview } />
    <Route path='*' component={ NotFound } />
  </Switch>
);
