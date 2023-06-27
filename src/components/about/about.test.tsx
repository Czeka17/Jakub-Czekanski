import { render, screen } from '@testing-library/react';
import About from './about';
import '@testing-library/jest-dom/extend-expect';
test('renders the about section with the correct content', () => {
  render(<About />);

  // Assert that the section heading is rendered
  expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('ME');

  // Assert that the paragraph text is rendered
  expect(screen.getByText(/hello, my name is/i)).toBeInTheDocument();
});
