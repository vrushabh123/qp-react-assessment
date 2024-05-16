import React from "react";

interface TodoProps {
  todo: string;
  completed: boolean;
  onToggleStatus: (todo: string) => void;
  onDelete: (todo: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, completed, onToggleStatus, onDelete }) => {
  return (
    <div
      className={`flex items-center mb-4 w-full py-3 pl-3 pr-5 ${completed ? "bg-gray-300" : "bg-white"
        }  cursor-pointer border border-gray-300 rounded-lg outline-none false hover:border-gray-400 focus-within:border-gray-300 focus-within:outline-none focus-within:ring-2 focus-within:ring-gray-300 gap-x-2 md:gap-x-5`}
      onClick={() => onToggleStatus(todo)}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleStatus(todo)}
        className="w-4 h-4 mr-2"
      />
      <div className="flex items-center justify-between w-full">
        <span className={`text-base font-normal line-clamp-1 ${completed ? "line-through" : ""}`}>
          {todo}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6" onClick={(e) => {
          e.stopPropagation();
          onDelete(todo)
        }} viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 10.5858L14.8284 7.75736L16.2426 9.17157L13.4142 12L16.2426 14.8284L14.8284 16.2426L12 13.4142L9.17157 16.2426L7.75736 14.8284L10.5858 12L7.75736 9.17157L9.17157 7.75736L12 10.5858Z"></path></svg>
      </div>
    </div>
  );
};

export default Todo;
