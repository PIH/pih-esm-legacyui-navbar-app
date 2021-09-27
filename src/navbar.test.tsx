import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Navbar from './navbar';

describe(`<Navbar />`, () => {
  it(`renders without dying`, () => {
    render(<Navbar />);
  });
});
