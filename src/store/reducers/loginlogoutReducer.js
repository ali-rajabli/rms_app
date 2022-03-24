const defaultState = {
  user: {},
  loading: false,
  error: "",
};

export const loginlogoutReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { ...state, loading: true, error: "" };
    case "LOGIN_SUCCESS":
      return { ...state, loading: false, data: action.payload, error: "" };
    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: "Something went wrong while logining...",
      };
    case "LOGOUT":
      return { ...state, data: {} };
    default:
      return state;
  }
};
