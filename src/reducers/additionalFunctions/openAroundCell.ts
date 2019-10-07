import { GameFieldType, PositionType } from 'typings/generalTypes';

const filterAroundCells = (gameField: GameFieldType) => ([x, y]: any): boolean => x >= 0 && y >= 0 && y < gameField[1].length && x < gameField.length;

const getAroundCells = (
  [x, y]: PositionType,
  gameField: GameFieldType
): Array<any> => [[x - 1, y], [x + 1, y], [x, y + 1], [x, y - 1], [x - 1, y - 1], [x + 1, y - 1], [x - 1, y + 1], [x + 1, y + 1]]
  .filter(filterAroundCells(gameField));

const fillCell = ([y, x]: PositionType, gameField: GameFieldType) => gameField[y][x].value++;

export const fillCells = (positionBomb: PositionType, gameField: GameFieldType) => {
  const aroundCellsWictoutBombs = getAroundCells(positionBomb, gameField);

  aroundCellsWictoutBombs.forEach((positionCell: PositionType) => fillCell(positionCell, gameField));
};

export const openAllAroundCells = ([y, x]: PositionType, cells: GameFieldType): GameFieldType => {
  const aroundCells = getAroundCells([y, x], cells);

  aroundCells.forEach(([posY, posX]: PositionType): void => {
    const isActive = cells[posY][posX].isActive;
    const value = cells[posY][posX].value;

    if (value === 0 && isActive) {
      cells[posY][posX].isActive = false;

      openAllAroundCells([posY, posX], cells)
    }

    if (value !== 0 && isActive) {
      cells[posY][posX].isActive = false;
      cells[posY][posX].type = 'count-bombs-' + value;
    }
  });

  return cells;
};
