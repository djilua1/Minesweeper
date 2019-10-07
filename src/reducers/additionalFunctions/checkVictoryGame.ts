import { PositionType, GameFieldType, RowType } from 'typings/generalTypes';

export const fieldWithOpenAroundCells = (
  openAllAroundCells: (a: PositionType, b: GameFieldType) => GameFieldType,
  gameFieldWithBombs: GameFieldType, cells: GameFieldType, y: number, x: number
) => !cells[y][x].value ? openAllAroundCells([y, x], gameFieldWithBombs) : gameFieldWithBombs;

const checkType = (type: string) => (cell: any): boolean => cell[type];

const counterCells = (type: string) => (counter: number, row: RowType): number => counter + row.filter(checkType(type)).length;

export const checkVictoryGame = (field: GameFieldType): boolean => field.reduce(counterCells('isActive'), 0) === field.reduce(counterCells('isBomb'), 0);
