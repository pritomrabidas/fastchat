import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },

  reducers: {
    loggeducer: (state , payload) => {
        console.log(payload);
      state.value += 1
    },
  },
})

export const { loggeducer } = userSlice.actions

export default userSlice.reducer