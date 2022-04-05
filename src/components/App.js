import Header from "./header/Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

const App = () => {
  return (
    <div>
      <Header headerContent={"Todos"} />
      <hr />
      <InputTodo />
      <TodoList />
    </div>
  );
};

export default App;


//thunk
//old way === dispatch action => reducer =>  update state
//thunk  === dispatch action => middleware/thunk => reducer => update state

