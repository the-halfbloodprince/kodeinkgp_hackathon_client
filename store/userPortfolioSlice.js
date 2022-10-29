import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  portfolios: [],
};

export const userPortfoliosSlice = createSlice({
  name: "userPortfolios",
  initialState,
  reducers: {
    setUserPortfolios: (state, action) => {
      // console.log((typeof action.payload) != 'object')
        // if (typeof action.payload != )
        // console.log(action.payload)
        state.portfolios = action.payload
    }
  },
});

export const { setUserPortfolios } = userPortfoliosSlice.actions;

export default userPortfoliosSlice.reducer;

{/* <Button onClick={() => {
          dispatch(setUserPortfolios([
            {
              user_name: 'A',
              stocks: 100,
              fiat: 300
            },
            {
                user_name: 'B',
                stocks: 190,
                fiat: 307
            }
      ])      
      )
      
      console.log(userPortfolios)

      
      }}>Set users</Button>
      {
        userPortfolios.length
      } */}