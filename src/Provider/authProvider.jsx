import { AUTH_LOGIN, AUTH_CHECK, AUTH_ERROR, AUTH_LOGOUT } from "react-admin";

export const authProvider = (type, params) => {
  // when user try to login
  if (type === AUTH_LOGIN) {
    const { username } = params;
    localStorage.setItem("username", username);
    return Promise.resolve();
  }
  if (type === AUTH_LOGOUT) {
    // when user try to log out
    localStorage.removeItem("username");
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    // when the API throws an error
    const { status } = params;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    } else {
      return Promise.resolve();
    }
  }

  // when a user navigates to a new location

  if (type === AUTH_CHECK) {
    return localStorage.getItem("username")
      ? Promise.resolve()
      : Promise.reject();
  }
  return Promise.reject("Unknown Methods");
};
