import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './slices/counter'
import loggedReducer from './slices/logged'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    logged: loggedReducer,
  },
})