import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './features/calculator/calculatorSlice';
import displayMiddleware from './middleware/displayMiddleware';

export const store = configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(displayMiddleware),
});
