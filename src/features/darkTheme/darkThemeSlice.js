// darkthemeSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  isDarkTheme: false,
};

// Create slice
const darkthemeSlice = createSlice({
  name: 'darktheme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    setDarkTheme: (state) => {
      state.isDarkTheme = true;
    },
    setLightTheme: (state) => {
      state.isDarkTheme = false;
    },
  },
});

// Export actions
export const { toggleTheme, setDarkTheme, setLightTheme } = darkthemeSlice.actions;

// Export reducer
export default darkthemeSlice.reducer;
