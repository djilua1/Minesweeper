import { ACTION_TYPE } from 'constants/actionTypeConstants';
import { initialStateCellReducer, CellReducer } from 'constants/initialStates';
import { openCell } from './caseFunctionsForCellReducer/openCell'
import { markCell } from './caseFunctionsForCellReducer/markCell';
import { startNewGame } from './caseFunctionsForCellReducer/startNewGame';
import { applyChanges } from './caseFunctionsForCellReducer/applyChanges';
import { CellActionTypes } from 'typings/gameActionTypes';

const { OPEN_CELL, MARK_CELL, START_NEW_GAME, APPLY_CHANGES } = ACTION_TYPE;

export const cellReducer = (state = initialStateCellReducer, action: CellActionTypes): CellReducer => {
  switch (action.type) {
    case OPEN_CELL:
      return openCell(state, action);

    case MARK_CELL:
      return markCell(state, action);

    case START_NEW_GAME:
      return startNewGame(state);

    case APPLY_CHANGES:
      return applyChanges(action);

    default:
      return state;
  }
};
