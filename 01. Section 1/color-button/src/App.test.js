import { fireEvent, render, screen } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

// I - 12. Start Color Button App
// I - 13. Test that Finds Button by Role and Clicks Button
// I - 14. OPTIONAL React Code: Click Button to Change Color
test('button has correct initial color', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'});
  expect(colorButton.textContent).toBe('Change to red');
});
// F - 12. Start Color Button App
// F - 13. Test that Finds Button by Role and Clicks Button
// F - 14. OPTIONAL React Code: Click Button to Change Color


// I - 16. Test Initial Condition of Button and Checkbox
test('initial conditions', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', /Change to blue/i);
  
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  
  expect(checkbox).not.toBeChecked();
});
// F - 16. Test Initial Condition of Button and Checkbox

// I - 20. Finding Checkbox with Label
// I - 22. Unit Testing Functions
test('Checkbox disables button on first click and enable on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button'});
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  
  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();
  
  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});
// F - 20. Finding Checkbox with Label
// F - 22. Unit Testing Functions

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  })
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  })
  test('works for multiple inner capital letter', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  })
})