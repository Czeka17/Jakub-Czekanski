import { render, screen, fireEvent } from '@testing-library/react';
import ContactModal from './contact-modal';
import '@testing-library/jest-dom/extend-expect';

test('renders the contact modal and triggers hide modal handler', () => {
  const hideModalHandler = jest.fn();

  render(
    <ContactModal
      hideModalHandler={hideModalHandler}
      response="Success!"
      responseParagraph="Email sent successfully!"
    />
  );

  // Retrieve all elements with the text "Success!" and "Email sent successfully!"
  const successElements = screen.queryAllByText(/success/i);
  const emailElements = screen.queryAllByText(/email sent successfully/i);

  // Assert that the modal is displayed with the correct content
  expect(successElements[0]).toBeInTheDocument();
  expect(emailElements[0]).toBeInTheDocument();

  // Trigger the click event on the "OK" button
  fireEvent.click(screen.getByRole('button', { name: /ok/i }));

  // Assert that the hide modal handler is called
  expect(hideModalHandler).toHaveBeenCalledTimes(1);
});
