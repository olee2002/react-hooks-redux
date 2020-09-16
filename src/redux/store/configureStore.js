import { createStore, applyMiddleware, compose } from 'redux'
// Thunk middleware is added to handle asynchronous actions.
import ReduxThunk from 'redux-thunk'

import rootReducer from '../reducers'

// pass middlewares in the array
const middleware = [ReduxThunk];

export default function configureStore() {
   // createStore function requires rootReducers as the first arg and middlewares in arr as second but you can also add compose to pass Redux dev tool.
   return createStore(rootReducer, 
      compose(
          applyMiddleware(...middleware),
          window.devToolsExtension ? window.devToolsExtension() : f => f
      ))
};
