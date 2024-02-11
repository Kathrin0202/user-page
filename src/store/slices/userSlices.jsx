import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
  name: "user",
  initialState: {
    data: {
      id: 0,
      avatar: "",
      email: "",
      first_name: "",
      last_name: "",
    },
  },
  reducers: {
    setUserDetails: (state, action) => {
      const payload = action.payload;
      state.data.id = payload.id;
      state.data.avatar = payload.avatar;
      state.data.email = payload.email;
      state.data.first_name = payload.first_name;
      state.data.last_name = payload.last_name;
    },
  },
});

export const { setUserDetails } = userSlices.actions;

export default userSlices.reducer;
