import React, { MouseEvent, FC } from 'react';
import { MarkCellAction, OpenCellAction } from 'typings/gameActionTypes';
import './style.css';

interface CellTypes {
  onClick: () => OpenCellAction,
  type: string | boolean,
  countBombs: number | boolean,
  markCell: () => MarkCellAction,
  isGameOver: boolean,
}

export const Cell: FC<CellTypes> = ({ onClick, type, countBombs, markCell, isGameOver }) => (
  <button
    className={`cell ${type}`}
    onContextMenu={(e: MouseEvent): MarkCellAction => { e.preventDefault(); return markCell() }}
    onClick={onClick}
    disabled={isGameOver}
  >
    {countBombs}
  </button>
);
