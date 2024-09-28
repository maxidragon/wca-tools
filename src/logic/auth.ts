import { wcaApiRequest } from "./request";

export const WCA_CLIENT_ID = "I1qih_LhOOv0h-y_-Mx7xPlaVmNO3mGbRGkRoUwnoaE";
export const TOKEN_NAME = "wca-tools-token";
export const USER_INFO_NAME = "wca-tools-user-info";
export const EXPIRES_IN_KEY = "wca-tools-expires-in";

export const initializeAuth = () => {
  const hash = window.location.hash.replace(/^#/, "");
  const hashParams = new URLSearchParams(hash);
  const token = hashParams.get("access_token");
  if (token) {
    localStorage.setItem(TOKEN_NAME, token);
  }
  if (hashParams.has("expires_in")) {
    const expiresIn = hashParams.get("expires_in") || 0;

    const expiresInSeconds = +expiresIn - 15 * 60;
    const expirationTime = new Date(
      new Date().getTime() + expiresInSeconds * 1000
    );
    localStorage.setItem(EXPIRES_IN_KEY, expirationTime.toISOString());
  }
  const expirationTime = localStorage.getItem(EXPIRES_IN_KEY);
  if (expirationTime && new Date() >= new Date(expirationTime)) {
    logout();
  }
  getMe();
  if (hashParams.has("access_token")) {
    window.location.hash = "";
  }
};

export const getMe = async () => {
  const response = await wcaApiRequest("me");
  const data = await response.json();
  localStorage.setItem(USER_INFO_NAME, JSON.stringify(data));
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_NAME);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_NAME);
  localStorage.removeItem(USER_INFO_NAME);
  localStorage.removeItem(EXPIRES_IN_KEY);
  window.location.reload();
};

export const isUserLoggedIn = () => {
  return getToken() !== null;
};

export const getUserInfo = () => {
  const userInfo = localStorage.getItem(USER_INFO_NAME);
  if (userInfo === null) {
    return null;
  }
  return JSON.parse(userInfo);
};
