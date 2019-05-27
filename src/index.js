import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'

const routing = (
    <BrowserRouter>
      <div>
        <Route path="/" component={App} />
      </div>
    </BrowserRouter>
  )

ReactDOM.render(routing, document.getElementById('root'));

