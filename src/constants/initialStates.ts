import { createNewMatrix } from 'reducers/additionalFunctions/createMatrix';
import { MIN_SIZE_FIELD } from './constants';
import { GameFieldType } from 'typings/generalTypes';

export interface Cell {
  value: number,
  isActive: boolean,
  isFlag: boolean,
  isBomb: boolean,
  type: string | boolean,
};

export interface CellReducer {
  isDyrty: boolean,
  countBombs: number,
  countRows: number,
  countColumns: number,
  isGameOver: boolean,
  isVictory: boolean,
  cells: GameFieldType,
};

export interface FormReducer {
  countRows: number,
  countColumns: number,
  countBombs: number,
}

export const initialStateCellReducer: CellReducer = {
  isDyrty: false,
  countBombs: 10,
  countRows: MIN_SIZE_FIELD,
  countColumns: MIN_SIZE_FIELD,
  isGameOver: false,
  isVictory: false,
  cells: createNewMatrix(MIN_SIZE_FIELD, MIN_SIZE_FIELD),
};


export const initialStateFormReducer: FormReducer = {
  countRows: MIN_SIZE_FIELD,
  countColumns: MIN_SIZE_FIELD,
  countBombs: 10,
};
