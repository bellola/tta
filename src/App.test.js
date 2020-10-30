import { render, screen } from '@testing-library/react';
import App from './App';
import Questions from './components/Questions'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/score/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders without crashing', ()=>{
  const div = document.createElement('div');
  render(<Questions/>, div)
})
