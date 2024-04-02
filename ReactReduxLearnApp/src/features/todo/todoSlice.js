import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world!Learning React is real fun" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    /*  updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    }, */
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
/* export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; */

export default todoSlice.reducer;

/* 
editTodo: (state, action) => {
     let { todoList } = state;
     state.todoList = todoList.map((item) => 
       item.id === action.payload.id ? action.payload : item);
   }
*/
