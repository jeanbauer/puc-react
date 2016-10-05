import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('render a button', () => {
  const button = document.createElement('button');
  ReactDOM.render(<App />, button);
});
