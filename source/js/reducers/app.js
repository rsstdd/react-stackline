// File Name: reducers/app
// Description: Application Reducers
// Used by:
// Dependencies:
// ------------------------------------------------------------

import { Map } from 'immutable';
import initialState from './initialState';

const actionsMap = {};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
