import React, { FC } from 'react';
import './style.css';

interface BombsCounterTypes {
  countBombs: number,
  countFlags: number,
}

export const BombsCounter: FC<BombsCounterTypes> = ({ countBombs, countFlags }) => <div className= 'counter-bombs' > { countBombs - countFlags}</div>;
