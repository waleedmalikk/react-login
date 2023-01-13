export const initialState = { email: "", token: "", email_to_upd: "" };

const loginReducer = (state, action) => {
  if (action.type === "SET_EMAIL") {
    const new_email = { email: action.payload.email };
    return { ...state, email: new_email };
  } else if (action.type === "SET_TOKEN") {
    const new_token = { token: action.payload.token };
    return { ...state, token: new_token };
  } else if (action.type === "SET_EMAIL_TO_UPD") {
      const new_email_to_upd = { email_to_upd: action.payload.email_to_upd };
    return { ...state, email_to_upd: new_email_to_upd };
  } else {
    return state;
  }
};

export default loginReducer;
