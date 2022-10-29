import { configureStore } from "@reduxjs/toolkit"
import appDataReducer from "./appDataSlice"
import currentPageReducer from "./appDataSlice"

export const store = configureStore({
  reducer: {
    appData: appDataReducer,
    // currentPage: currentPageReducer
  },
})