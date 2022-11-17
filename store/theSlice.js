import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const theSlice = createSlice({
  name: 'thevalue',
  initialState,
  reducers: {
    devalue: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { devalue } = theSlice.actions

export default theSlice.reducer