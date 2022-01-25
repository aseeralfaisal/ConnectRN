import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'users',
  initialState: {
    user: 'aseer'
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { pushTodo } = counterSlice.actions

const slice = counterSlice.reducer
export default slice
