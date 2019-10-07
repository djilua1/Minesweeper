import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Input } from '../components/input';

Enzyme.configure({ adapter: new Adapter() });

describe('Component Input tests', () => {
  const nextProps = {
    onChange: () => { },
    name: 'Test',
    value: 10,
  };

  const WrappedInput = shallow(<Input {...nextProps} />);

  test('name is valid', () => {
    expect(WrappedInput.text()).toEqual(nextProps.name);
  });

  test('value is valid', () => {
    expect(WrappedInput.childAt(1).getElement().props.value).toEqual(nextProps.value);
  });
});
