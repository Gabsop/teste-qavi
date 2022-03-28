import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './routes/mainRouter';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
