import  rootReducer  from "./rootReducer";
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const mylogger = composeWithDevTools(applyMiddleware(logger, thunk));
export const store = createStore(rootReducer, mylogger);