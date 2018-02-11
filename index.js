import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'modules/App/App';


render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelectorAll('main')[0],
);

