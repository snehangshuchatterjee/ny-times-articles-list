import { createStore, applyMiddleware } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { client } from '../../axiosClient';

import rootReducer from '../reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(axiosMiddleware(client))
);

export default store;