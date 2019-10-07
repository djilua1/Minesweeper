import { createNewMatrix } from '../additionalFunctions/createMatrix';
import { CellActionTypes } from 'typings/gameActionTypes';

export const applyChanges = ({ countColumns, countRows, countBombs }: CellActionTypes) => ({
  isGameOver: false,
  isDyrty: false,
  isVictory: false,
  countBombs: countBombs,
  countRows: countRows,
  countColumns: countColumns,
  cells: createNewMatrix(countColumns, countRows),
});
