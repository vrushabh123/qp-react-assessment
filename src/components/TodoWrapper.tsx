import React, { useCallback } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import useLocalStorageTodos from "../custom-hooks/useLocalStorage";

const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useLocalStorageTodos("todos");

  const handleAddTodo = useCallback(
    (text: string) => {
      setTodos([...todos, { text, completed: false }]);
    },
    [todos, setTodos]
  );

  const handleToggleCompleted = useCallback(
    (todoText: string) => {
      setTodos(
        todos.map((todo) =>
          todo.text === todoText ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todos, setTodos]
  );

  const handleDelete = useCallback(
    (todoText: string) => {
      setTodos(
        todos.filter((todo) => todo.text !== todoText)
      );
    },
    [todos, setTodos]
  );

  return (
    <div className="container mx-auto relative">
      <TodoInput onAddTodo={handleAddTodo} />
      <TodoList todos={todos} onToggleStatus={handleToggleCompleted} onDelete={handleDelete} />
    </div>
  );
};

export default TodoWrapper;
