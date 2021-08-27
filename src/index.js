import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// virtual document object model
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//  import된 App component(<App .>), id='root' 인 html 요소
// this combination between javascript and html called 'jsx'
