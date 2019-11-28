import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));

// 3.运行saga配置
sagaMiddleware.run(rootSaga);

export default store;