import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  finder: []
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!action.payload.text) {
        return;
      }
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      if (!action.payload.text) {
        return;
      }
      state.todos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    filter: (state, action) => {
      //for search
      if (action.payload !== '') {
        state.finder = state.todos.filter((item) => {
         return item.text.toLowerCase().startsWith(action.payload.toLowerCase());
        });
      }else{state.finder = state.todos}
      // if the search input is empty show all
    }
  }});
  
  export const { addTodo, deleteTodo, updateTodo, filter } = todoSlice.actions;
  export default todoSlice.reducer;
  