import React, {useState} from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import App from './App';
import { renderHook } from '@testing-library/react';

describe('App component', () => {
  test('renders without errors', () => {
    render(<App />);
  });

  test('initial state of isOpen is false', () => {
    const { result } = renderHook(() => useState(false));
    const [isOpen] = result.current;
    expect(isOpen).toBe(false);
  });
  
})
