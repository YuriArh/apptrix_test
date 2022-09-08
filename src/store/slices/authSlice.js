import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const data = await AuthService.login(username, password);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});

const initialState = {
  token: null,
  loading: false,
  error: null,
  exists: false,
};

const authSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.exists = true;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.token = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { reducer } = authSlice;

export default reducer;
