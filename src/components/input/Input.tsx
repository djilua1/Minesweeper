import React, { ChangeEvent, FC } from 'react';
import { ChangeValueAction, ChangeCountBombsAction } from 'typings/gameActionTypes';
import './style.css';

interface InputTypes {
  onChange: (value: number, type: any) => ChangeValueAction | ChangeCountBombsAction,
  name: string,
  value: number,
  typeInput?: string,
}

export const Input: FC<InputTypes> = ({ onChange, name, value, typeInput }) => (
  <div className='wrapper-input'>
    <div className='name'>{name}</div>
    <input type='number' className='input-counter' value={value} onChange={(
      event: ChangeEvent<HTMLInputElement>
    ): ChangeValueAction | ChangeCountBombsAction => onChange(+event.target.value, typeInput)} />
  </div>
);
