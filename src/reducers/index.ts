import { combineReducers } from 'redux';
import { cellReducer } from './cellReducer';
import { changingFormReducer } from './changingFormReducer';

export const reducer = combineReducers({
  cellReducer,
  changingFormReducer,
});

export type GameState = ReturnType<typeof reducer>;
