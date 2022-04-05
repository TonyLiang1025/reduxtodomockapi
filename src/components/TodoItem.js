import { useDispatch } from "react-redux";
import { delTodo, modTodo } from "../actions";

const TodoItem = ({ todoContent, isComplete, index }) => {
  const dispatch = useDispatch();

  const listItemName = `todo-content ${
    isComplete ? "completed" : "not-completed"
  }`;

  return (
    <li>
      <span
        onDoubleClick={() => modTodo(dispatch)(index)}
        className={listItemName}
      >
        {todoContent}
      </span>
      <button onClick={() => delTodo(dispatch)(index)}>Delete</button>
    </li>
  );
};

export default TodoItem;
