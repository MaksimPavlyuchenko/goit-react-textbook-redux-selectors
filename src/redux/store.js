import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { taskReduser } from './tasksSlice';
import { filtersReducer } from './filterSlice';

const rootReducer = combineReducers({
  tasks: taskReduser,
  filters: filtersReducer,
});

export const store = configureStore({ reducer: rootReducer });
