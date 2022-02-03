import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelCasewithSpace } from './App';

test('renders button with initial text and color', () => {
 render(<App />);
 const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
 expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
});

test('turns blue when clicked', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('when checkbox is checked, button should be disabled', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'});
  fireEvent.click(checkbox);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toBeDisabled();
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('disabled button has gray background and reverts to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'});
  fireEvent.click(checkbox);
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});
})


test('clicked disabled button has gray background and reverts to blue', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', {name: 'Disable Button'});
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
})

describe('camelcase words', () => {
  test('words with no camel case letters', () => {
    expect(replaceCamelCasewithSpace('Red')).toBe('Red');
  });
  test('words with 1 camel case letters', () => {
    expect(replaceCamelCasewithSpace('MidninghtBlue')).toBe('Midninght Blue');
  });
  test('words with no camel case letters', () => {
    expect(replaceCamelCasewithSpace('MediumVioletRed')).toBe('Medium Violet Red');
  });
})