import React from 'react';
import { Game } from 'components/game';
import { WrappedChangingComplexityForm } from 'components/changingComplexityForm';
import 'minesweeper.css';

export const Minesweeper = () => (
  <div className="minesweeper">
    <Game />
    <WrappedChangingComplexityForm />
  </div>
);
