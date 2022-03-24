import api from "../../api/api";

export const login = (form, history) => async (dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await api().post("/login", form);
    localStorage.setItem("token_user", response.data.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    history.push("/orders");
    console.log("LOGIN IS SUCCESSFUL!");
  } catch {
    dispatch({ type: "LOGIN_ERROR" });
    console.log("Something went wrong!");
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token_user");
  dispatch({ type: "LOGOUT_USER" });
};
