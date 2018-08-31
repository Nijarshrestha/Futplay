import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export default createStore(
  connectRouter(history)(rootReducer),
    rootReducer,

    composeEnhancers(
      applyMiddleware(thunk,routerMiddleware(history)),
    ),
  );

