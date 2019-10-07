import { ACTION_TYPE } from 'constants/actionTypeConstants';
import { OpenCellAction, MarkCellAction, StartNewGameAction, ChangeValueAction, ChangeCountBombsAction, ApplyChangesAction } from 'typings/gameActionTypes';

const { OPEN_CELL, MARK_CELL, START_NEW_GAME, CHANGE_VALUE, CHANGE_COUNT_BOMBS, APPLY_CHANGES } = ACTION_TYPE;

export const openCell = (positionX: number, positionY: number): OpenCellAction => ({
  type: OPEN_CELL,
  positionX,
  positionY,
});

export const markCell = (positionY: number, positionX: number): MarkCellAction => ({
  type: MARK_CELL,
  positionY,
  positionX,
});

export const startNewGame = (): StartNewGameAction => ({
  type: START_NEW_GAME,
});

export const changeValue = (value: number, typeInput: string): ChangeValueAction => ({
  type: CHANGE_VALUE,
  value,
  typeInput,
});

export const changeCountBombs = (value: number): ChangeCountBombsAction => ({
  type: CHANGE_COUNT_BOMBS,
  value,
});

export const applyChanges = (countColumns: number, countRows: number, countBombs: number): ApplyChangesAction => ({
  type: APPLY_CHANGES,
  countRows,
  countColumns,
  countBombs,
});
