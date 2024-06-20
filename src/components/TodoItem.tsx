import React from "react";

interface TodoItemProps {
  todo: { text: string; completed: boolean };
  index: number;
  toggleTodo: (index: number) => void;
  editTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  index,
  toggleTodo,
  editTodo,
  removeTodo,
}) => {
  return (
    <div
      className={`flex items-center justify-between my-2 p-4 w-80 bg-blue-100 rounded-lg border ${
        todo.completed ? "border-green-400 line-through" : "border-blue-400"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(index)}
          className="mr-3 h-5 w-5 text-blue-600"
        />
        <span className={`text-lg ${todo.completed ? "line-through" : ""}`}>
          {todo.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-gray-50 hover:bg-gray-100"
          onClick={() => editTodo(index)}
        >
          ✏️
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-gray-50 hover:bg-gray-100"
          onClick={() => removeTodo(index)}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
