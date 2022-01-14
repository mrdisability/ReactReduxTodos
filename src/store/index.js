import { configureStore } from '@reduxjs/toolkit';

import todosSlice from './todos-slice';
import uiSlice from './ui-slice';

const store = configureStore({
  reducer: { ui: uiSlice.reducer, todos: todosSlice.reducer },
});

export default store;