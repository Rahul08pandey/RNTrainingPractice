import {createSlice} from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    events: null,
  },
  reducers: {
    eventsData: (state, action) => {
      state.events = action.payload;
    },
  },
});

export const {eventsData} = scheduleSlice.actions;

export default scheduleSlice.reducer;
