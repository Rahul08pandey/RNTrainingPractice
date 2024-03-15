import {createSlice} from '@reduxjs/toolkit';

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    portfolio: null,
  },
  reducers: {
    portfolioData: (state, action) => {
      state.portfolio = action.payload;
    },
  },
});

export const {portfolioData} = portfolioSlice.actions;

export default portfolioSlice.reducer;
