import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ccfirstname: "",
  cclastname: "",
  ccmobile: "",
  ccemail: "",
  cccomplaint: "",
  ccnature: "",
};

export const ccComplaintSlice = createSlice({
  name: "cccomplaintdata",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    ccUpdateFirstname: (state, action) => {
      state.ccfirstname = action.payload;
    },
    ccUpdateLastname: (state, action) => {
      state.cclastname = action.payload;
    },
    ccUpdateMobile: (state, action) => {
      state.ccmobile = action.payload;
    },
    ccUpdateEmail: (state, action) => {
      state.ccemail = action.payload;
    },
    ccUpdateComplaint: (state, action) => {
      state.cccomplaint = action.payload;
    },
    ccUpdateNature: (state, action) => {
      state.ccnature = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const {
  ccUpdateFirstname,
  ccUpdateLastname,
  ccUpdateMobile,
  ccUpdateEmail,
  ccUpdateComplaint,
  ccUpdateNature,
} = ccComplaintSlice.actions;

export default ccComplaintSlice.reducer;
