import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todoList = useSelector((state) => state);

  const todoElements = todoList.map(({ todoContent, isComplete }, index) => {
    return (
      <TodoItem
        key={`${todoContent} - ${index}`}
        todoContent={todoContent}
        isComplete={isComplete}
        index={index}
      />
    );
  });

  return <ul>{todoElements}</ul>;
};

export default TodoList;
