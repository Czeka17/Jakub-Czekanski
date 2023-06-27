import { render, screen } from '@testing-library/react';
import Header from './header';
import '@testing-library/jest-dom/extend-expect';
test('renders header text and image', () => {
  render(<Header />);

  const headerText = screen.getByText('ASPIRING FRONT END DEVELOPER');
  const headerName = screen.getByText('JAKUB CZEKAŃSKI');
  const headerImage = screen.getByAltText('Jacob');

  expect(headerText).toBeInTheDocument();
  expect(headerName).toBeInTheDocument();
  expect(headerImage).toBeInTheDocument();
});
