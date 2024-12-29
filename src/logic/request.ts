import { getToken } from "./auth";

export const WCA_DEV_ORIGIN = import.meta.env.VITE_DEV_WCA_ORIGIN
  ? import.meta.env.VITE_DEV_WCA_ORIGIN
  : "https://staging.worldcubeassociation.org";
export const WCA_PROD_ORIGIN = "https://www.worldcubeassociation.org";
export const WCA_ORIGIN = import.meta.env.PROD
  ? WCA_PROD_ORIGIN
  : WCA_DEV_ORIGIN;

export const wcaApiRequest = (
  path: string,
  method = "GET",
  apiPrefix = true,
  body?: unknown,
  customToken?: string
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  if (customToken) {
    headers.append("Authorization", `Bearer ${customToken}`);
  } else {
    const token = getToken();
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
  }
  const url = apiPrefix
    ? `${WCA_ORIGIN}/api/v0/${path}`
    : `${WCA_ORIGIN}/${path}`;
  return fetch(url, {
    method,
    body: body ? JSON.stringify(body) : undefined,
    headers: headers,
  });
};
