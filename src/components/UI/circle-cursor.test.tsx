import { render, cleanup } from '@testing-library/react';
import CircleCursor from './circle-cursor';

describe('Cursor circle component', () => {
test('renders CircleCursor component', () => {
  render(<CircleCursor />);
});
afterEach(cleanup);

test('renders CircleCursor component', () => {
  const { getByTestId } = render(<CircleCursor />);
  
  const circleCursorComponent = getByTestId('circle-cursor');
  const classAttribute = circleCursorComponent.getAttribute('class');
  expect(classAttribute).toContain('circle');
});
})
