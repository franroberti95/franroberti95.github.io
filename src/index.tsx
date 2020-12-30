import React from 'react';
import ReactDOM from 'react-dom';
import Login from './screens/login';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
  button,div,h1,h2,h3,h4,p,li{
    font-family: 'Source Sans Pro',serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
