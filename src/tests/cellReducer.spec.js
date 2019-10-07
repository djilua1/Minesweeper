import { ACTION_TYPE } from "../constants/actionTypeConstants";
import { cellReducer } from "../reducers/cellReducer";

const { START_NEW_GAME, APPLY_CHANGES, MARK_CELL, OPEN_CELL } = ACTION_TYPE;

const state = {
  isDyrty: true,
  countBombs: 0,
  countColumns: 3,
  countRows: 3,
  isGameOver: true,
  isVictory: false,
  cells: [
    [{ value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }],
    [{ value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }],
    [{ value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: true, isFlag: false, isBomb: false, type: 'count-bombs-0' }],
  ],
};

describe('cellReducer tests', () => {
  test(START_NEW_GAME, () => {
    const action = {
      type: START_NEW_GAME,
    };

    expect(cellReducer(state, action)).toEqual({
      ...state,
      isDyrty: false,
      isGameOver: false,
    });
  });

  test(APPLY_CHANGES, () => {
    const action = {
      type: APPLY_CHANGES,
      countColumns: 0,
      countRows: 0,
      countBombs: 0,
    };

    expect(cellReducer(state, action)).toEqual({
      ...state,
      isDyrty: false,
      isGameOver: false,
      countColumns: 0,
      countRows: 0,
      countBombs: 0,
      cells: [],
    });
  });

  test(MARK_CELL, () => {
    const action = {
      type: MARK_CELL,
      positionX: 0,
      positionY: 1,
    };

    expect(cellReducer(state, action).cells[action.positionY][action.positionX].type).toBe('cell');
  });

  test(OPEN_CELL, () => {
    const action = {
      type: OPEN_CELL,
      positionX: 0,
      positionY: 1,
    };

    expect(cellReducer(state, action)).toEqual({
      ...state,
      isVictory: true,
      cells: [
        [{ value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }],
        [{ value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }],
        [{ value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }, { value: 0, isActive: false, isFlag: false, isBomb: false, type: 'count-bombs-0' }],
      ]
    });
  });
});
