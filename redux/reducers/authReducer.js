import { login, logout } from "../actions/actions";
import { toast } from "react-toastify";

const initialState = {
  users: [
    { email: "usama@gmail.com", password: "password1" },
    { email: "saqib@yahoo.com", password: "password2" },
    { email: "jamshed@outlook.com", password: "password3" },
  ],
  user: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case login: {
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
        return { ...state, user: user, isLoggedIn: true };
      } else {
        toast.error("INCORRECT EMAIL OR PASSWORD!", {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,

          progress: undefined,
          theme: "dark",
        });
        return { ...state, user: null, isLoggedIn: false };
      }
    }

    case logout: {
      toast.info("LOGGED OUT", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        progress: undefined,
        theme: "dark",
      });
      return { ...state, user: null, isLoggedIn: false };
    }

    default: {
      return state;
    }
  }
};
export default authReducer;
