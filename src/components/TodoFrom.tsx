import React, { ChangeEvent } from "react";

interface TodoFormProps {
  input: string;
  isEditing: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddTodo: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  input,
  isEditing,
  handleInputChange,
  handleAddTodo,
}) => {
  return (
    <div className="flex w-80">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter a new task..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none bg-white/20 py-1.5 rounded-md"
      />
      <button
        onClick={handleAddTodo}
        className="rounded-r-lg px-3 py-1 text-white shrink-0"
      >
        {isEditing ? "➕" : "💾"}
      </button>
    </div>
  );
};

export default TodoForm;
