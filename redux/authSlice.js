import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// Define initial state
const initialState = {
  users: [
    { email: "usama@gmail.com", password: "password1" },
    { email: "saqib@yahoo.com", password: "password2" },
    { email: "jamshed@outlook.com", password: "password3" },
  ],
  user: null,
  isLoggedIn: false,
};

// Create a slice of the store with a name and initial state
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        toast.success("LOGGED IN", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          progress: undefined,
          theme: "dark",
        });
        state.user = user;
        state.isLoggedIn = true;
      } else {
        toast.error("USER NOT FOUND", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,

          progress: undefined,
          theme: "dark",
        });
        state.user = null;
        state.isLoggedIn = false;
      }
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

// Export the actions and reducer as separate entities
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
