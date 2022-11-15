import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import SignIn from './view/sign-in/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App /> */}
    <SignIn />
  </div>
);

