import { render, screen } from '@testing-library/react';
import Footer from './footer';
import '@testing-library/jest-dom/extend-expect';
test('renders social media links and copyright information', () => {
  render(<Footer />);

  const githubLink = screen.getByRole('link', { name: /github/i });
  const linkedinLink = screen.getByRole('link', { name: /linkedin/i });
  const copyrightText = screen.getByText(/projected and made by/i);

  expect(githubLink).toHaveAttribute('href', 'https://github.com/Czeka17');
  expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/jakub-czekański-5562b0260/');
  expect(githubLink).toBeInTheDocument();
  expect(linkedinLink).toBeInTheDocument();
  expect(copyrightText).toBeInTheDocument();
});
