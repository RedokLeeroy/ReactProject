import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
// TODO PLS REPLACE BASE NAME
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={<div>...loading</div>} persistor={persistor}>
      <BrowserRouter basename="/react-homework-template">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
