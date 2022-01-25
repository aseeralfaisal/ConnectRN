import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './slice'

const store = configureStore({
  reducer: rootReducer,
})

export default store