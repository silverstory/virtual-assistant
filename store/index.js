import { configureStore } from '@reduxjs/toolkit'
import iconslice from './icon-slice'
import counterReducer from './counterSlice'

const store = configureStore({
    reducer: {
        icon: iconslice.reducer,
        counter: counterReducer,
    },
})

export default store

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// })