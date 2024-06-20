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
      className={`flex items-center justify-between my-2 p-4 min-w-80 bg-blue-100 rounded-lg border text-wrap ${
        todo.completed ? "border-green-600 line-through" : "border-blue-600"
      }`}
    >
      <div className="flex items-center">
        <input
          className="mr-3 h-5 w-5 text-blue-600"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(index)}
        />
      </div>
      <div className="flex items-center">{todo.text}</div>

      <div className="flex gap-2">
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-gray-50 hover:bg-gray-100"
          onClick={() => (todo.completed ? null : editTodo(index))}
        >
          ✏️
        </button>
        <button
          className="inline-flex w-8 h-8 rounded-lg text-sm border border-gray-300 justify-center items-center bg-gray-50 hover:bg-gray-100"
          onClick={() => (todo.completed ? null : removeTodo(index))}
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
