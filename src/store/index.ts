/*
 * @Description: redux
 * @Author: Mankeung
 * @Date: 2022-10-07 15:06:49
 * @LastEditors: Mankeung
 * @LastEditTime: 2022-10-07 16:58:50
 */

import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import rootSaga from './sagas'

const sagaMiddlewar = createSagaMiddleware()
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?? compose
const middlewares = [sagaMiddlewar]

// if (process.env.NODE_ENV === 'development') {
//   const { logger } = require('redux-logger')
//   middlewares.push(logger)
// }

const redux = createStore(reducer, composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddlewar.run(rootSaga)

export default redux
