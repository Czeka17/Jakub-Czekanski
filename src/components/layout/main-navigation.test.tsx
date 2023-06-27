import { render, screen } from '@testing-library/react';
import MainNavigation from './main-navigation';
import '@testing-library/jest-dom/extend-expect';
test('renders navigation links', () => {
  render(<MainNavigation isOpen={false} HideNavHandler={() => {}} />);

  const homeLink = screen.getByText('Home');
  const aboutLink = screen.getByText('About');
  const skillsLink = screen.getByText('Skills');
  const projectsLink = screen.getByText('Projects');
  const contactLink = screen.getByText('Contact');

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(skillsLink).toBeInTheDocument();
  expect(projectsLink).toBeInTheDocument();
  expect(contactLink).toBeInTheDocument();
});
