import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Cell } from '../components/cell';

Enzyme.configure({ adapter: new Adapter() });

describe('Component Cell tests', () => {
  const nextProps = {
    onClick: () => { },
    type: 'count-bombs-4',
    countBombs: 4,
    isActive: false,
    onContextMenu: () => { },
    isBomb: false,
    isGameOver: false,
  };

  const WrappedCell = shallow(<Cell {...nextProps} />);

  test('count around bombs is valid', () => {
    expect(+WrappedCell.text()).toBe(nextProps.countBombs);
  });

  test('class is valid', () => {
    expect(WrappedCell.props().className).toBe('cell count-bombs-4');
  });
});
