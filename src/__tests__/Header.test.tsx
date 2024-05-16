import { render } from '@testing-library/react';
import Header from '../components/Header';

test('renders header text', () => {
  const { getByText } = render(
    <Header />
  );

  expect(getByText(/QB Todo Application/)).toBeInTheDocument();
});