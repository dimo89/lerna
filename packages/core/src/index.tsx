import * as React from 'react';
import * as ReactDOM from 'react-dom';
import BrowserRouter from 'react-router-dom/es/BrowserRouter'
import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);