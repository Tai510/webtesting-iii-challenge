// Test away
import React from 'react';
import { render , cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from '../controls/Controls';
import Display from '../display/Display';
afterEach(cleanup)

it('render without crashing', () => {
    render(<Controls />)
    render(<Display />)
})