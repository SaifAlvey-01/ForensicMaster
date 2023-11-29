import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface userState {
  email : String;
  plan : number;
  dark : number;
}

const initialState: userState = {
    email: "x",
    plan: 0,
    dark: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action:PayloadAction<{email: String, plan: number, dark: number}>) => {
      state.email = action.payload.email;
      state.plan = action.payload.plan;
      state.dark = action.payload.dark;
      let emaill = state.email;
      window.localStorage.email = action.payload.email;
      window.localStorage.plan = action.payload.plan;
      window.localStorage.dark = action.payload.dark;
      console.log(state.email, state.plan, state.dark);
    },
    reset: (state) => {
      state.email = "x";
      state.plan = 0;
      state.dark = 0;
      window.localStorage.clear();
    },
  },
})

export const { setUser, reset } = userSlice.actions
export default userSlice.reducer