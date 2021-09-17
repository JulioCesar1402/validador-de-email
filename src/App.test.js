import { render, screen } from '@testing-library/react';
import App from './App';
import ValidEmail from './ValidEmail';

test('Verifica a existencia do input para inserir o email', () => {
  render(<App />);
  const textElement = screen.getByText(/Verifique o Email/i);
  expect(textElement).toBeInTheDocument();

  const emailInput = screen.getByTestId("email-input");
  expect(emailInput).toBeInTheDocument();
});

test('Verifica ao inserir um email invalido', () => {
  const EMAIL_USER = 'emailerrado'
  const { getByText } = render( <ValidEmail email={EMAIL_USER} />);
  const isInvalid = getByText('Email Inválido');
  expect(isInvalid).toBeInTheDocument();
})

test('Verifica ao inserir um email valido', () => {
  const EMAIL_USER = 'email@email.com'
  const { getByText } = render( <ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
})
