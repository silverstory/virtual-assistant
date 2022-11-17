import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import iconslice from './icon-slice'
import counterReducer from './counterSlice'
import lastBotMsgReducer from './lastBotMsgSlice'
import complaintDataReducer from './complaintDataSlice'
import ccComplaintDataReducer from './ccComplaintSlice'
import theReducer from './theSlice'

const reducer = combineReducers({
    icon: iconslice.reducer,
    counter: counterReducer,
    lastbotmessage: lastBotMsgReducer,
    complaintdata: complaintDataReducer,
    cccomplaintdata: ccComplaintDataReducer,
    thevalue: theReducer,
  })

  const store = configureStore({
    reducer,
})

// manual working w/o combineReducers
// const store = configureStore({
//     reducer: {
//         icon: iconslice.reducer,
//         counter: counterReducer,
//         lastbotmessage: lastBotMsgReducer,
//     },
// })

export default store

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })