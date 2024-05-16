import { render, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

const mockTodos = [
  { text: 'Todo 1', completed: false },
  { text: 'Todo 2', completed: true },
];

const onToggleStatus = jest.fn();
const handleDelete = jest.fn();

test('renders todo list correctly', () => {
    const { getByText } = render(
      <TodoList todos={mockTodos} onToggleStatus={onToggleStatus} onDelete={handleDelete} />
    );
  
    expect(getByText(/Todo 1/)).toBeInTheDocument();
    expect(getByText(/Todo 2/)).toBeInTheDocument();
  });

test('handles todo status change', () => {
  const { getByText } = render(
    <TodoList todos={mockTodos} onToggleStatus={onToggleStatus} onDelete={handleDelete} />
  );

  fireEvent.click(getByText(/Todo 1/));

  expect(onToggleStatus).toHaveBeenCalledWith(mockTodos[0].text);
});