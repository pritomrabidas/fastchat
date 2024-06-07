import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slice/userSlice'
import chatFriendInfo from './slice/chatFriendInfo'

export default configureStore({
  reducer: {userSlice,chatFriendInfo},
})