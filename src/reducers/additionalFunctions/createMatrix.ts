import { EMPTY_ELEMENT_ARRAY } from 'constants/constants';
import { Cell } from 'constants/initialStates';
import { GameFieldType } from 'typings/generalTypes';

const createCell = (): Cell => ({ value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' });

export const createNewMatrix = (countX: number, countY: number): GameFieldType => new Array(+countX)
  .fill(EMPTY_ELEMENT_ARRAY)
  .map(() => new Array(+countY)
    .fill(EMPTY_ELEMENT_ARRAY)
    .map(createCell));
