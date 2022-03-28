import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { Statecontext } from './context/Statecontext';
import './global.css';

ReactDom.render(
  <Statecontext>
    <Router>
      <App />
    </Router>
   </Statecontext>,
  document.getElementById('root'),
);

