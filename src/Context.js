import React, { createContext, useContext, useReducer } from "react";
import loginReducer from "./Reducer";
import { initialState } from "./Reducer";

const loginContext = createContext(initialState);
export const LoginProvider = ({ children }) => {
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const set_email = (passed_email) => {
    dispatch({
      type: "SET_EMAIL",
      payload: { email: passed_email },
    });
  };
  const set_token = (passed_token) => {
    dispatch({
      type: "SET_TOKEN",
      payload: { token: passed_token },
    });
  };
    
const set_email_to_upd = (passed_email_to_upd) => {
    dispatch({
        type: "SET_EMAIL_TO_UPD",
        payload: { email_to_upd: passed_email_to_upd },
    });
};

  const value = {
    email: state.email,
      token: state.token,
    email_to_upd:state.email_to_upd,
    set_email,
    set_token,
    set_email_to_upd
  };
  return (
    <loginContext.Provider value={value}>{children}</loginContext.Provider>
  );
};

const useLogin = () => {
  const context = useContext(loginContext);
  return context;
};
export default useLogin;
