import { openCell, markCell, startNewGame, changeValue, changeCountBombs, applyChanges } from '../actions/index.ts';
import { ACTION_TYPE } from '../constants/actionTypeConstants';

const { OPEN_CELL, MARK_CELL, START_NEW_GAME, CHANGE_VALUE, CHANGE_COUNT_BOMBS, APPLY_CHANGES } = ACTION_TYPE;

describe('action tests', () => {
  test(OPEN_CELL, () => {
    expect(openCell(3, 4)).toEqual({
      type: OPEN_CELL,
      positionX: 3,
      positionY: 4,
    });
  });

  test(MARK_CELL, () => {
    expect(markCell(3, 4).positionX).toBe(4);
  });

  test(START_NEW_GAME, () => {
    expect(startNewGame().type).toBe(START_NEW_GAME);
  });

  test(CHANGE_VALUE, () => {
    expect(changeValue(10, 'countColumns')).toEqual({
      type: CHANGE_VALUE,
      value: 10,
      typeInput: 'countColumns',
    });
  });

  test(CHANGE_VALUE, () => {
    expect(changeValue(100, 'countRows')).toEqual({
      type: CHANGE_VALUE,
      value: 100,
      typeInput: 'countRows',
    });
  });

  test(CHANGE_COUNT_BOMBS, () => {
    expect(changeCountBombs(100)).toEqual({
      type: CHANGE_COUNT_BOMBS,
      value: 100,
    });
  });

  test(APPLY_CHANGES, () => {
    expect(applyChanges().type).toBe(APPLY_CHANGES);
  });
});
