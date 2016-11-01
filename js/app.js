import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Components/header.js';
import Body from './Components/body.js';
import Footer from './Components/footer.js';


ReactDOM.render(
  (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  ),
document.getElementById('main')
);
