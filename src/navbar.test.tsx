import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NavBar from './navbar';

describe(`<Navbar />`, () => {
  it(`renders without dying`, () => {
    render(<NavBar />);
  });
});
