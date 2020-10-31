import { render, screen } from '@testing-library/react';
import App from './App';
import qb from './qns'

function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}

//TEST CASES//
test('renders score', () => {
  render(<App />);
  const linkElement = screen.getByText(/score/i);
  expect(linkElement).toBeInTheDocument();
});

//Checking is the questionbank is a Promise
test('qb return an array of questions', () => {
  expect(qb() instanceof Promise).toBe(true)
})

//Check if Promise returns an array of unique questions
test('the data is peanut butter', () => {
  return qb().then(data => {
    expect(checkIfArrayIsUnique(data)).toBe(true);
  });
});



