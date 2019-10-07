import { Cell } from 'constants/initialStates';
import { BombPositionsType, GameFieldType, RowType } from 'typings/generalTypes';

const markBombs = (bombsPositions: BombPositionsType, y: number) => (cell: Cell, x: number): Cell => bombsPositions.some(([posY, posX]) => posX === x && posY === y) ? { ...cell, isBomb: true, type: !cell.isActive && 'bomb' } : cell;

const getRow = (bombsPositions: BombPositionsType) => (row: RowType, y: number): RowType => row
  .map(markBombs(bombsPositions, y));

export const searchBombs = (gameField: GameFieldType, bombsPositions: BombPositionsType): GameFieldType => gameField
  .map(getRow(bombsPositions));
