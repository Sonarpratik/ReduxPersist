import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const Store_page = createAsyncThunk(
  "store_page",
  async (username, thunkAPI) => {
    try {
      // configure header's Content-Type as JSON

      console.log("store_page", username);
      return username;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  store_page: 1,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state, action) {
      return {
        ...state,

        store_page: 1,
      };
    },
  },
  extraReducers: (builder) => {
    // login user
    builder.addCase(Store_page.fulfilled, (state, action) => {
      state.store_page = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
