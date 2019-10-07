import { ACTION_TYPE } from 'constants/actionTypeConstants';
import { initialStateFormReducer } from 'constants/initialStates';
import { FormActionTypes } from 'typings/gameActionTypes';

const { CHANGE_VALUE, CHANGE_COUNT_BOMBS } = ACTION_TYPE;

export const changingFormReducer = (state = initialStateFormReducer, { type, value, typeInput }: FormActionTypes) => {
  switch (type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [typeInput]: value,
      }

    case CHANGE_COUNT_BOMBS:
      return {
        ...state,
        countBombs: value,
      }

    default:
      return state;
  }
};
