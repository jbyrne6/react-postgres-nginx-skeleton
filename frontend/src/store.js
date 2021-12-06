import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Actions/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})