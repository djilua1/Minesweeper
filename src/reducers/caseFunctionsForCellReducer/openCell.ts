import { getRandomBombsPositions } from '../additionalFunctions/randomBombs';
import { openAllAroundCells, fillCells } from '../additionalFunctions/openAroundCell';
import { searchBombs } from '../additionalFunctions/searchBombs';
import { openCurrentCell } from '../additionalFunctions/openCell';
import { checkVictoryGame, fieldWithOpenAroundCells } from '../additionalFunctions/checkVictoryGame';
import { CellReducer } from 'constants/initialStates';
import { OpenCellAction } from 'typings/gameActionTypes';

type T = typeof openCell;

const openCellIfGameFieldDyrty: T = (state, { positionX, positionY }) => {
  const bombsPositions = getRandomBombsPositions(state.countBombs, state.countRows, state.countColumns, [positionY, positionX]);
  bombsPositions.forEach((positionBomb) => fillCells(positionBomb, state.cells));
  const gameFieldWithOpenCell = openCurrentCell(state.cells, positionY, positionX);
  const gameFieldWithBombs = fieldWithOpenAroundCells(openAllAroundCells, searchBombs(gameFieldWithOpenCell, bombsPositions), state.cells, positionY, positionX);
  const isVictoryGame = checkVictoryGame(gameFieldWithBombs);

  return {
    ...state,
    cells: gameFieldWithBombs,
    isDyrty: true,
    isVictory: isVictoryGame,
  }
};

const openCellIfGameFieldNotDyrty: T = (state, { positionX, positionY }) => {
  if (!state.cells[positionY][positionX].isFlag) {
    const gameFieldWithOpenCell = openCurrentCell(state.cells, positionY, positionX);

    if (state.cells[positionY][positionX].isBomb) {
      return {
        ...state,
        cells: gameFieldWithOpenCell,
        isGameOver: true,
      }
    }

    const isVictoryGameNoFirstClick = checkVictoryGame(fieldWithOpenAroundCells(openAllAroundCells, gameFieldWithOpenCell, state.cells, positionY, positionX));

    return {
      ...state,
      isVictory: isVictoryGameNoFirstClick,
      cells: gameFieldWithOpenCell,
    }
  }

  return state;
};

export const openCell = (state: CellReducer, { positionX, positionY }: OpenCellAction): CellReducer => {
  if (!state.isDyrty) {
    return openCellIfGameFieldDyrty(state, { positionX, positionY });
  }

  return openCellIfGameFieldNotDyrty(state, { positionX, positionY });
};
