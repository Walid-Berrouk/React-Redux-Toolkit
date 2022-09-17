import { createSlice } from '@reduxjs/toolkit'


export const loggedSlice = createSlice({
  name: 'logged',
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    signIn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoggedIn = true
    },
    signOut: (state) => {
      state.isLoggedIn = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { signIn, signOut } = loggedSlice.actions

export default loggedSlice.reducer