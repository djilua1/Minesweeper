import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { reducer } from 'reducers';
import { Minesweeper } from 'minesweeper';
import 'index.css';

export const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Minesweeper />
  </Provider>,
  document.getElementById('minesweeper')
);
