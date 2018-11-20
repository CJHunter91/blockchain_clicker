import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MiningLogic from './models/MiningLogic'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App logic={new MiningLogic()} />, div);
});
