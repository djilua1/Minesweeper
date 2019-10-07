import { typeMark, typeCell } from 'constants/constants';
import { CellReducer } from 'constants/initialStates';
import { CellActionTypes } from 'typings/gameActionTypes';

export const markCell = (state: CellReducer, action: CellActionTypes): CellReducer => {
  const countFlags = state.cells.reduce((counter, rows) => counter + rows.filter(cell => cell.isFlag).length, 1);

  const newField = state.cells.map((column, y) =>
    column.map((cell, x) => {
      if (y === action.positionY && x === action.positionX && cell.isActive) {
        if (countFlags <= state.countBombs) {
          return {
            ...cell,
            isFlag: !state.cells[y][x].isFlag,
            type: !state.cells[y][x].isFlag ? typeMark : typeCell,
          }
        }

        return {
          ...cell,
          isFlag: false,
          type: typeCell,
        }
      }

      return cell;
    })
  )

  return {
    ...state,
    cells: newField,
  }
};
