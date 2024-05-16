import React from "react";
import Todo from "./Todo";

interface TodoItem {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
  onToggleStatus: (todoText: string) => void;
  onDelete: (todo: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggleStatus, onDelete }) => {
  return (
    <>
      {todos?.map((todo: any) => (
        <div key={todo?.text}>
          <Todo todo={todo?.text} completed={todo?.completed} onToggleStatus={onToggleStatus} onDelete={onDelete} />
        </div>
      ))}
    </>
  );
};

export default TodoList;
