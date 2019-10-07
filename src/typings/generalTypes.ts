import { Cell } from 'constants/initialStates';

export type GameFieldType = Array<Array<Cell>>;
export type PositionType = [number, number];
export type BombPositionsType = Array<PositionType>;
export type RowType = Array<Cell>;
