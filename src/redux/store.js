import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../redux/features/todoslice'
export const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
})
export default store;