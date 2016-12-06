import {combineReducers} from  'redux';

import app from './app';
import route from './route';

let reducers = {
  app,
  route
};

export const rootReducer = combineReducers(reducers);

export default rootReducer;
