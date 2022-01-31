import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'users',
  initialState: {
    user: 'aseer',
    mobileNumber: ''
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    },
    setMobileNumber: (state, action) => {
      state.mobileNumber = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMobileNumber } = counterSlice.actions

const slice = counterSlice.reducer
export default slice
