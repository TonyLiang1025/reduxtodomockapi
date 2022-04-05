import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions";

const InputTodo = () => {
  const [inputTodo, setInputTodo] = useState("");
  const dispatch = useDispatch();

  const addTodoToGlobalState = () => {
    if (!inputTodo.trim()) {
      setInputTodo("");
      return;
    }
    addTodo(dispatch)(inputTodo);
    setInputTodo("");
  };
  return (
    <div>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button onClick={addTodoToGlobalState}>Add</button>
    </div>
  );
};
export default InputTodo;
