import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    setFilter: (_, { payload }) => payload,
    // { type, payload } = action -> this is object
    // _ = state -> due to does not need
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
