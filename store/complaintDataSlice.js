import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  complaint: "",
  nature: "",
};

export const complaintDataSlice = createSlice({
  name: "complaintdata",
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
    updateFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    updateLastname: (state, action) => {
      state.lastname = action.payload;
    },
    updateMobile: (state, action) => {
      state.mobile = action.payload;
    },
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
    updateComplaint: (state, action) => {
      state.complaint = action.payload;
    },
    updateNature: (state, action) => {
      state.nature = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const {
  updateFirstname,
  updateLastname,
  updateMobile,
  updateEmail,
  updateComplaint,
  updateNature,
} = complaintDataSlice.actions;

export default complaintDataSlice.reducer;
