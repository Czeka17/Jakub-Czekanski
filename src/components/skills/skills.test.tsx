import { render } from '@testing-library/react';
import Skills from './skills';
import '@testing-library/jest-dom/extend-expect';

describe('Skills component', () => {
    test('renders Skills component', () => {
    render(<Skills />);
})
test('renders slider', () => {
    const { getByTestId } = render(<Skills />);
    const skillsSliderWrapper = getByTestId('slider');
    const skillsSlider = skillsSliderWrapper.querySelector('.slick-slider');
  expect(skillsSlider).toBeInTheDocument();
  })
})

  