import { configureStore } from "@reduxjs/toolkit"
import userPortfolioReducer from "./userPortfolioSlice"

export const store = configureStore({
  reducer: {
    userPortfolios: userPortfolioReducer
  },
})