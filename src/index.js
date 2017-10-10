import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MiningLogic from './models/MiningLogic';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App logic={new MiningLogic()} />, document.getElementById('root'));
registerServiceWorker();
