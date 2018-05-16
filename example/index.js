import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from 'modules/App/App';


render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelectorAll('main')[0],
);

