import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import UserApi from "../../apis/userApi";

export const signUpAccount = createAsyncThunk(
  "user/signUpAccount",
  async (params) => {
    // const authResult = await UserApi.signUp(params);
    const authResult = "Abc";
    return authResult;
  }
);

const userSlice = createSlice({
  name: "User",
  initialState: {
    current: {},
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: {
    //#region Sign Up
    [signUpAccount.pending]: (state) => {
      state.loading = true;
    },
    [signUpAccount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [signUpAccount.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
    //#endregion
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
