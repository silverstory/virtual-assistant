import { configureStore } from '@reduxjs/toolkit'
import iconslice from './icon-slice'
import counterReducer from './counterSlice'
import lastBotMsgReducer from './lastBotMsgSlice'

const store = configureStore({
    reducer: {
        icon: iconslice.reducer,
        counter: counterReducer,
        lastbotmessage: lastBotMsgReducer,
    },
})

export default store

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })