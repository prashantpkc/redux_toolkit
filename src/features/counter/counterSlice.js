import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counterrrr',
  initialState,
  reducers: {
    increment: (state) => {
      console.log('State before increment:', state);
      state.value += 1;
      console.log('State after increment:', state);
    },
    decrement: (state) => {
      console.log('State before decrement:', state);
      state.value -= 1;
      console.log('State after decrement:', state);
    },
    incrementByAmount: (state, action) => {
      console.log('State before incrementByAmount:', state);
      console.log('Action:', action);
      state.value += action.payload;
      console.log('State after incrementByAmount:', state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
