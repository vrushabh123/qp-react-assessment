import { useState, useEffect } from "react";

interface TodoItem {
  text: string;
  completed: boolean;
}

const useLocalStorageTodos = (key: string) => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const storedTodos = localStorage.getItem(key);
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  return [todos, setTodos] as const;
};

export default useLocalStorageTodos;
