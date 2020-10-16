import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tab from './Tab';

describe('<Tab />', () => {
  test('it should mount', () => {
    render(<Tab />);
    
    const tab = screen.getByTestId('Tab');

    expect(tab).toBeInTheDocument();
  });
});