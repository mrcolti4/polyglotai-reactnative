import { createSlice } from "@reduxjs/toolkit";
import { loginWithEmail, registerUserByEmail } from "./thunks";
import { User } from "firebase/auth";
import { handleError, handleSignUp } from "./handlers";

export interface AuthState {
  token: string;
  user: User | {};
  error: string;
}

const initialState = {
  token: "",
  user: {},
  error: "",
} satisfies AuthState as AuthState;

const rootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUserByEmail.fulfilled, handleSignUp);
    builder.addCase(registerUserByEmail.rejected, handleError);
    builder.addCase(loginWithEmail.fulfilled, handleSignUp);
    builder.addCase(loginWithEmail.rejected, handleError);
  },
});

export const rootReducer = rootSlice.reducer;
