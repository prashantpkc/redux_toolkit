import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import darkThemeSlice from '../features/darkTheme/darkThemeSlice'

export const store = configureStore({
  reducer: {
     counter:counterReducer,
    darkTheme: darkThemeSlice
  },
})