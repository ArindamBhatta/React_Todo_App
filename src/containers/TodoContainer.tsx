import { useState, ChangeEvent } from "react";
import TodoForm from "../components/TodoFrom";
import TodoItem from "../components/TodoItem";

interface Todo {
  text: string;
  completed: boolean;
}

const TodoContainer = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const addTodo = () => {
    if (input.trim() !== "") {
      if (isEditing && currentIndex !== null) {
        const allTodos = [...todos];
        allTodos[currentIndex] = {
          text: input,
          completed: allTodos[currentIndex].completed,
        };
        setTodos(allTodos);
        setIsEditing(false);
        setCurrentIndex(null);
        console.log("Edited Todo:", allTodos[currentIndex]);
      } else {
        const newTodo: Todo = { text: input, completed: false };
        const addedTodo = [...todos, newTodo];
        setTodos(addedTodo);
        console.log("Added Todo:", newTodo);
      }
      setInput("");
    }
  };

  const removeTodo = (index: number) => {
    const allTodos = [...todos];
    allTodos.splice(index, 1);
    setTodos(allTodos);
    console.log("Removed Todo at index:", index);
  };

  const editTodo = (index: number) => {
    setInput(todos[index].text);
    setIsEditing(true);
    setCurrentIndex(index);
    console.log("Editing Todo at index:", index);
  };

  const toggleTodo = (index: number) => {
    const allTodos = [...todos];
    allTodos[index].completed = !allTodos[index].completed;
    setTodos(allTodos);
    console.log("Toggled Todo at index:", index);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="container flex flex-col items-center  bg-[#cddcf3] min-w-96">
      <h1 className="mb-8">To-Do List</h1>

      <TodoForm
        input={input}
        isEditing={isEditing}
        handleInputChange={handleInputChange}
        handleAddTodo={addTodo}
      />
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            index={index}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoContainer;
