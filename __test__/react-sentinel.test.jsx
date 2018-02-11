import React from 'react';
import Sentinel from '../dist/react-sentinel.browser';

const renderMock = () => <div />;
const observeMock = prev => ({ n: prev.n + 1 });

describe('React Sentinel', () => {
  it('it renders without breaking', () => {
    const wrapper = shallow(<Sentinel render={renderMock} observe={observeMock} />);

    expect(wrapper.length).toBe(1);
  });

  it('initial prop sets initial state', () => {
    const wrapper = shallow(<Sentinel
      initial={{ n: 0 }}
      render={renderMock}
      observe={observeMock}
    />);

    expect(wrapper.state().n).toBe(0);
  });
});
