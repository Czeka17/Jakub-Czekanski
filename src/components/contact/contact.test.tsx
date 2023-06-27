import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Contact from './contact';
import '@testing-library/jest-dom/extend-expect';

test('submits the contact form successfully', async () => {
  render(<Contact />);

  // Fill in the form inputs
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/e-mail/i), { target: { value: 'johndoe@example.com' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Hello, this is a test message.' } });

  // Submit the form
  const submitButton = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(submitButton);

  // Assert the loading state
  expect(submitButton).toBeDisabled();
  expect(submitButton).toHaveTextContent(/loading/i);

  // Delay for email to be sent and modal to appear
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Assert the modal content
  expect(screen.getByText(/Success!/i)).toBeInTheDocument();
  expect(screen.getByText(/email sent successfully/i)).toBeInTheDocument();

  // Assert the button state after email is sent
  expect(submitButton).not.toBeDisabled();
  expect(submitButton).toHaveTextContent
})