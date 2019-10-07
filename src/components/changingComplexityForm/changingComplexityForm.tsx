import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Input } from '../input';
import { changeValue, changeCountBombs, applyChanges } from 'actions/index';
import { GameState } from 'reducers';
import { TypeOfConnect } from 'typings/gameActionTypes';
import './style.css';

const ChangingComplexityForm: FC<ChangingComplexityFormProps> = ({ countRows, countColumns, countBombs, changeValue, changeCountBombs, applyChanges }) => (
  <div className='changing-form'>
    <div className='inputs'>
      <Input name='Count columns' value={countColumns} onChange={changeValue} typeInput='countColumns' />
      <Input name='Count rows' value={countRows} onChange={changeValue} typeInput='countRows' />
      <Input name='Count bombs' value={countBombs} onChange={changeCountBombs} />
    </div>
    <button className='change-btn' onClick={() => applyChanges(countRows, countColumns, countBombs)}>Apply</button>
  </div>
);

const mapStateToProps = ({ changingFormReducer: { countRows, countColumns, countBombs } }: GameState) => {
  const currentCountRows = countRows > 30 ? 30 : countRows;
  const currentCountColumns = countColumns > 30 ? 30 : countColumns;
  const currentCountBombs = countBombs > currentCountColumns * currentCountRows - 1 ? currentCountColumns * currentCountRows - 1 : countBombs;

  return {
    countRows: currentCountRows,
    countColumns: currentCountColumns,
    countBombs: currentCountBombs,
  }
};

const mapDispatchToProps = { changeValue, changeCountBombs, applyChanges };

const enhanceChangingComplexityForm = connect(mapStateToProps, mapDispatchToProps);

type ChangingComplexityFormProps = TypeOfConnect<typeof enhanceChangingComplexityForm>;

export const WrappedChangingComplexityForm = enhanceChangingComplexityForm(ChangingComplexityForm);
