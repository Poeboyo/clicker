import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Knife from './components/knife/index';
import Sushi from './components/sushi/index';
import Sprite from './components/sprite/index'

ReactDOM.render(
  <React.StrictMode>
    <Knife />
    <Sushi />
    <Sprite />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


