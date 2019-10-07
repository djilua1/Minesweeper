import React, { FC } from 'react';
import { connect } from 'react-redux';
import { BombsCounter } from '../bombsCounter';
import { WrappedSmileButton } from '../smileButton';
import { Timer } from '../timer';
import { GameState } from 'reducers';
import { TypeOfConnect } from 'typings/gameActionTypes';
import './style.css';

interface HeaderTypes {
  increment: number,
}

const Header: FC<HeaderProps> = ({ countBombs, cells, isGameOver, isVictory, isDyrty, increment }) => (
  <div className='header'>
    <BombsCounter countBombs={countBombs} countFlags={cells.reduce((counter, column) => counter + column.filter(({isFlag}) => isFlag).length, 0)} />
    <WrappedSmileButton type={isVictory ? 'victory' : isGameOver ? 'unsmile-button' : 'smile-button'} />
    <Timer isDyrty={isDyrty} increment={increment} />
  </div>
);

const mapStateToProps = ({ cellReducer: { cells, countBombs, isGameOver, isVictory, isDyrty } }: GameState) => ({
  increment: isGameOver || isVictory ? 0 : 1,
  countBombs,
  isDyrty,
  isGameOver,
  isVictory,
  cells,
});

const enhanceHeader = connect(mapStateToProps);

type HeaderProps = TypeOfConnect<typeof enhanceHeader> & HeaderTypes;

export const WrappedHeader = enhanceHeader(Header);
