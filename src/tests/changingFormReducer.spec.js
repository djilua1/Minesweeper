import { ACTION_TYPE } from '../constants/actionTypeConstants';
import { changingFormReducer } from '../reducers/changingFormReducer';
import { initialStateFormReducer } from '../constants/initialStates';

const { CHANGE_VALUE, CHANGE_COUNT_BOMBS } = ACTION_TYPE;

describe('changingFormReducer tests', () => {
  test(CHANGE_VALUE, () => {
    const action = {
      type: CHANGE_VALUE,
      value: 20,
      typeInput: 'countRows',
    };

    expect(changingFormReducer(initialStateFormReducer, action)).toEqual({
      ...initialStateFormReducer,
      countRows: 20,
    });
  });

  test(CHANGE_VALUE, () => {
    const action = {
      type: CHANGE_VALUE,
      value: 88,
      typeInput: 'countColumns',
    };

    expect(changingFormReducer(initialStateFormReducer, action)).toEqual({
      ...initialStateFormReducer,
      countColumns: 30,
    });
  });

  test(CHANGE_COUNT_BOMBS, () => {
    const state = {
      ...initialStateFormReducer,
      countRows: 10,
      countColumns: 10,
    }

    const action = {
      type: CHANGE_COUNT_BOMBS,
      value: 99,
    };

    expect(changingFormReducer(state, action)).toEqual({
      ...state,
      countBombs: 99,
    });
  });

  test(CHANGE_COUNT_BOMBS, () => {
    const state = {
      ...initialStateFormReducer,
      countRows: 10,
      countColumns: 10,
    }

    const action = {
      type: CHANGE_COUNT_BOMBS,
      value: 100,
    };

    expect(changingFormReducer(state, action)).toEqual({
      ...state,
      countBombs: 99,
    });
  });

  test('', () => {
    const state = {
      ...initialStateFormReducer,
      countRows: 10,
      countColumns: 10,
    }

    const action = {
      value: 100,
    };

    expect(changingFormReducer(state, action)).toEqual(state);
  });
});
