import { AuthState } from "./slice";

export const handleSignUp = (state: AuthState, { payload }: any) => {
  state.user = payload;
};
export const handleError = (state: AuthState, { payload }: any) => {
  state.error = payload;
};
