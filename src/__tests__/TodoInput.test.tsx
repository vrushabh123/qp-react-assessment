import { render, fireEvent } from '@testing-library/react';
import TodoInput from '../components/TodoInput';

const handleAddTodo = jest.fn();

test('render input correctly', () => {
    const { queryByPlaceholderText } = render(
      <TodoInput onAddTodo={handleAddTodo} />
    );
  
    expect(queryByPlaceholderText(/Add a todo item/)).toBeInTheDocument();
  });

test('handles add todo', () => {
  const newTodoInput = "new todo";
  const { getByPlaceholderText, getByText } = render(<TodoInput onAddTodo={handleAddTodo} />);
  fireEvent.change(getByPlaceholderText(/Add a todo item/), {
    target: { value: newTodoInput }
  });

  fireEvent.click(getByText(/Add/));

  expect(handleAddTodo).toHaveBeenCalledWith(newTodoInput);
});