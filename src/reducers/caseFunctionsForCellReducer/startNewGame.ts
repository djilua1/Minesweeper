import { createNewMatrix } from '../additionalFunctions/createMatrix';
import { CellReducer } from 'constants/initialStates';

export const startNewGame = (state: CellReducer) => ({
  ...state,
  isDyrty: false,
  isGameOver: false,
  isVictory: false,
  cells: createNewMatrix(state.countColumns, state.countRows),
});
