import React, { useState, useCallback } from "react";

interface TodoInputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  const handleAddTodo = useCallback(() => {
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  }, [inputValue, onAddTodo]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleAddTodo();
      }
    },
    [handleAddTodo]
  );

  return (
    <div className="flex mb-4 w-100">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="flex-1 px-4 py-3 mr-2 border border-gray-300 rounded-lg outline-none hover:border-gray-400 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        placeholder="Add a todo item"
      />
      <button
        onClick={handleAddTodo}
        className="px-4 md:px-6 py-1 md:py-2 text-sm md:text-base font-normal text-white bg-[#101e2b] rounded-lg flex w-28 justify-evenly items-center"
      >
        Add <svg xmlns="http://www.w3.org/2000/svg" className="w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"></path></svg>
      </button>
    </div>
  );
};

export default TodoInput;
