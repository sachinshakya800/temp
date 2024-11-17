import { createReducer } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  loading: false,
  user: null,
  isAuthenticated: false,
  error: null,
};

// User reducer using builder callback notation
export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LoginRequest', (state) => {
      state.loading = true;
    })
    .addCase('LoginSuccess', (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    .addCase('LoginFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    .addCase('RegisterRequest', (state) => {
      state.loading = true;
    })
    .addCase('RegisterSuccess', (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    .addCase('RegisterFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    .addCase('LoadUserRequest', (state) => {
      state.loading = true;
    })
    .addCase('LoadUserSuccess', (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.isAuthenticated = true;
    })
    .addCase('LoadUserFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    })

    .addCase('LogoutUserRequest', (state) => {
      state.loading = true;
    })
    .addCase('LogoutUserSuccess', (state) => {
      state.loading = false;
      state.user = null;
      state.isAuthenticated = false;
    })
    .addCase('LogoutUserFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = true;
    })

    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});
