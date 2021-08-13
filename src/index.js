import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/root-reducer'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import './index.scss'


const store = createStore(rootReducer,applyMiddleware(logger))
const persistor = persistStore(store);
ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <PersistGate persistor={persistor} loading={null}>
              <App />
            </PersistGate>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));




