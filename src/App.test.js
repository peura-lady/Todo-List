import React from 'react';
import { render, screen } from '@testing-library/react';
import Todos from './components/Todos';
import '@testing-library/jest-dom/extend-expect';

import { renderHook } from '@testing-library/react-hooks'

// test('additing to do', () => {
//   render(<Todos />);
//   // const linkElement = screen.getByText();
//   expect(screen.getByRole(Todos)).not.toHaveFormValues({
//     desc: 'dishes',
//     date: '9.10.2021',
//     priority: 'Low',
//   })

// });


test('additing to do', () => {
  render(<Todos />);
  const { result } = renderHook(() => Todos())
  expect(screen).toBe(0)
  expect(typeof result.current.increment).toBe('function')
});