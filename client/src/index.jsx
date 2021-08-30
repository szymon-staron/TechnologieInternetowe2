import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { DaniaProvider } from './_context';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DaniaProvider>
        <App />
      </DaniaProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
