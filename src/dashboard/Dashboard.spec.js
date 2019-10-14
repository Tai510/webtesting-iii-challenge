// Test away
import React from 'react';
import { render , cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from '../controls/Controls';
import Display from '../display/Display';
import renderer from 'react-test-renderer';

it('render without crashing', () => {
    expect(render(<Controls />)).toMatchSnapshot();
    expect(render(<Display />)).toMatchSnapshot();
})
