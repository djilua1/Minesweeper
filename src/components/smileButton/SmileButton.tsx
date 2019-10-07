import React, { FC } from 'react';
import { connect } from 'react-redux';
import { startNewGame } from 'actions/index';
import { TypeOfConnect } from 'typings/gameActionTypes';
import './style.css';

interface SmileButtonTypes {
  type: string,
};

const SmileButton: FC<SmileButtonProps> = ({ startNewGame, type }) => (
  <button className={type} onClick={startNewGame}></button>
);

const mapDispatchToProps = { startNewGame };

const enhanceSmileButton = connect(null, mapDispatchToProps);

type SmileButtonProps = TypeOfConnect<typeof enhanceSmileButton> & SmileButtonTypes;

export const WrappedSmileButton = enhanceSmileButton(SmileButton);
