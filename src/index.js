import React from 'react';
import ReactDOM from 'react-dom';

import Index from './components/index.js'
import Footer from './components/footer.js'
import App from './App.js';

ReactDOM.render(
  <React.StrictMode>
    <Index />
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

