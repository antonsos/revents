import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

const render = () => {
  ReactDOM.render(<App />, rootEl);
};

if(module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  })
}

render();

registerServiceWorker();
