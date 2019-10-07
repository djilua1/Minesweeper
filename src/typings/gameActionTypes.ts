import { ACTION_TYPE } from 'constants/actionTypeConstants';
import { InferableComponentEnhancerWithProps } from 'react-redux';

const { OPEN_CELL, MARK_CELL, START_NEW_GAME, CHANGE_VALUE, CHANGE_COUNT_BOMBS, APPLY_CHANGES } = ACTION_TYPE;

export interface OpenCellAction {
  type?: typeof OPEN_CELL
  positionX: number
  positionY: number
}

export interface MarkCellAction {
  type: typeof MARK_CELL
  positionX: number
  positionY: number
}

export interface StartNewGameAction {
  type: typeof START_NEW_GAME
}

export interface ApplyChangesAction {
  type?: typeof APPLY_CHANGES
  countRows: number
  countColumns: number
  countBombs: number
}

export interface ChangeValueAction {
  type: typeof CHANGE_VALUE
  typeInput: string
  value: number
}

export interface ChangeCountBombsAction {
  type: typeof CHANGE_COUNT_BOMBS
  typeInput?: any
  value: number
}

export type CellActionTypes =
  & OpenCellAction
  & MarkCellAction
  & StartNewGameAction
  & ApplyChangesAction;

export type FormActionTypes =
  & ChangeCountBombsAction
  & ChangeValueAction;

export type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<
  infer Props,
  infer _
>
  ? Props
  : never;
