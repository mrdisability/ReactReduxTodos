import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    todo: null
  },
  reducers: {
    replaceTodos(state, action) {
      state.todos = action.payload.todos;
    },
    deleteTodo(state, action) {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        state.todos = state.todos.filter((todo) => todo.id !== id);
      }
    },
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push({
        id: newTodo.id,
        todo: newTodo.todo,
        completed: newTodo.completed,
      });
    },
    getTodo(state, action) {
      state.todo = action.payload;
    },
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice;