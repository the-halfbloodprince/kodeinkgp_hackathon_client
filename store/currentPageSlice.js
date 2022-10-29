import { createSlice } from '@reduxjs/toolkit'

const initialState = 'Dashboard'


export const currentPageSlice = createSlice({
    name: "currentPage",
    initialState,
    reducers: {
      setCurrentPage: (state, action) => {
        state.portfolios = action.payload
      }
    },
  });
  
  export const { setCurrentPage } = currentPageSlice.actions;
  
  export default currentPageSlice.reducer;