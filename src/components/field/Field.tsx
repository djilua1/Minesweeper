import React, { FC } from 'react';
import { connect } from 'react-redux';
import { openCell, markCell } from 'actions/index';
import { Cell } from '../cell';
import { OpenCellAction, MarkCellAction, TypeOfConnect } from 'typings/gameActionTypes';
import { Cell as CellType } from 'constants/initialStates';
import { GameState } from 'reducers';
import './style.css';
import { RowType } from 'typings/generalTypes';

const createCell = (
  openCell: (x: number, y: number) => OpenCellAction,
  markCell: (x: number, y: number) => MarkCellAction,
  y: number,
  isGameOver: boolean,
  isVictory: boolean
) => ({ isActive, isBomb, isFlag, value, type }: CellType, x: number) =>
    < Cell
      key={`${y}_${x}`}
      type={!isActive ? isBomb ? 'bomb' : `open ${type}` : isFlag && 'mark'}
      onClick={() => openCell(x, y)}
      markCell={() => markCell(y, x)}
      countBombs={!isActive && !isBomb && value}
      isGameOver={isGameOver || isVictory}
    />;

const createRow = (
  openCell: (x: number, y: number) => OpenCellAction,
  markCell: (x: number, y: number) => MarkCellAction,
  isGameOver: boolean,
  isVictory: boolean
) => (row: RowType, y: number) => <div key={y} className='row'>{row.map(createCell(openCell, markCell, y, isGameOver, isVictory))}</div>;

const GameField: FC<GameFieldProps> = (
  { openCell, cells, markCell, isGameOver, isVictory }
) => <div className='field'>{cells.map(createRow(openCell, markCell, isGameOver, isVictory))}</div>;

const mapStateToprops = ({ cellReducer: { cells, isGameOver, isVictory } }: GameState) => ({ cells, isGameOver, isVictory });
const mapDispatchToProps = { openCell, markCell };

const enhanceField = connect(mapStateToprops, mapDispatchToProps);

type GameFieldProps = TypeOfConnect<typeof enhanceField>;

export const WrappedField = enhanceField(GameField);
