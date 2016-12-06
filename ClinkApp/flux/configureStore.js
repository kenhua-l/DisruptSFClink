import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
const loggerMiddleware = createLogger({collapsed: true});

const createStoreWithMiddleware = compose(applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
))(createStore);



const configureStore = function (initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
