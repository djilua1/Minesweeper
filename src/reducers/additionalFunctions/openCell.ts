import { Cell } from 'constants/initialStates';
import { RowType, GameFieldType } from 'typings/generalTypes';

const searchCell = (posX: number) => (cell: Cell, x: number): Cell => x === posX ? { ...cell, isActive: false, type: 'count-bombs-' + cell.value } : cell;

const searchRow = (posY: number, posX: number) => (row: RowType, y: number): RowType => y === posY ? row.map(searchCell(posX)) : row;

export const openCurrentCell = (cells: GameFieldType, posY: number, posX: number): GameFieldType => cells.map(searchRow(posY, posX));
