//target => make todos [{todoContent, isComplete}] to be global
import { todoApi } from "../api";

export const addTodo = (dispatch) => async (todoContent) => {
  try {
    const result = await todoApi.addTodo({
      todoContent,
      isComplete: false,
    });

    console.log(todoApi.todos)

    dispatch({
      type: "ADD",
      payload: {
        todoContent,
        isComplete: false,
      },
    });
  } catch (e) {
    console.log(e);
    // dispatch({
    //     type: "Err",
    //     payload: {
    //       errorCode: xxxx,
    //       message: "gegegegeg",
    //     },
    //   });
  }
};

export const modTodo = (dispatch) => async (index) => {
  try {
    const result = await todoApi.modTodo(index);
    dispatch({
      type: "MOD",
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};

export const delTodo = (dispatch) => async (index) => {
  try {
    const result = await todoApi.delTodo(index);
    dispatch({
      type: "DEL",
      payload: index,
    });
  } catch (e) {
    console.log(e);
  }
};
