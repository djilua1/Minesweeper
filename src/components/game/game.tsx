import React from 'react';
import { WrappedHeader } from '../header';
import { WrappedField } from '../field';
import './style.css';

export const Game = () => (
  <div className='main-form'>
    <WrappedHeader />
    <WrappedField />
  </div>
);
