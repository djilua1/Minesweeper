import { EMPTY_ELEMENT_ARRAY } from 'constants/constants';
import { PositionType, BombPositionsType } from 'typings/generalTypes';

const randomComparator = (): number => Math.round(Math.random()) ? 1 : -1;

const formCellFromIndex = (x: number) => (index: number): PositionType => [index % x, Math.floor(index / x)];

const removeStartPosition = ([x, y]: PositionType, countColumns: number) => (index: number): boolean => {
  const [posX, posY] = formCellFromIndex(countColumns)(index);

  return !(posX === x && posY === y);
};

export const getRandomBombsPositions = (countBombs: number, countRows: number, countColumns: number, currentPosition: PositionType): BombPositionsType =>
  new Array(countRows * countColumns)
    .fill(EMPTY_ELEMENT_ARRAY)
    .map((cell, i) => i)
    .sort(randomComparator)
    .filter(removeStartPosition(currentPosition, countColumns))
    .slice(0, countBombs)
    .map(formCellFromIndex(countColumns));
