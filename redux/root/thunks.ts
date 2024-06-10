import { auth } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

interface CreateUser {
  email: string;
  password: string;
}

export const registerUserByEmail = createAsyncThunk(
  "auth/createWithEmail",
  async (data: CreateUser, thunkApi) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return user;
    } catch (e) {
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case "auth/email-already-in-use":
            return thunkApi.rejectWithValue("Error: Email already in use");

          case "auth/invalid-email":
            return thunkApi.rejectWithValue("Error: Invalid email");
        }
      }
    }
  }
);

export const loginWithEmail = createAsyncThunk(
  "auth/loginWithEmail",
  async (data: CreateUser, thunkApi) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      return user;
    } catch (e) {
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case "auth/wrong-password":
            return thunkApi.rejectWithValue("Error: Wrong password");
        }
      }
    }
  }
);
