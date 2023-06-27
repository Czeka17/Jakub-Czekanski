import { render, screen } from '@testing-library/react';
import Projects from './projects';
import '@testing-library/jest-dom/extend-expect';

describe('Projects component', () => {
    test('renders project component', () => {
        render(<Projects/>)
    })
    test('renders project titles', () => {
        render(<Projects />);
        const projectTitles = screen.getAllByTestId('project-title')
        expect(projectTitles).toHaveLength(4);
        expect(projectTitles[0]).toHaveTextContent('MOOWIZ - Netflix clone');
        expect(projectTitles[1]).toHaveTextContent('PostIT - facebook clone');
        expect(projectTitles[2]).toHaveTextContent('To-Do list');
        expect(projectTitles[3]).toHaveTextContent('Portfolio Page');
      });
      
      test('renders project images', () => {
        render(<Projects />);
        const projectImages = screen.getAllByTestId('project-image');
        expect(projectImages).toHaveLength(4);

      });
      
})
