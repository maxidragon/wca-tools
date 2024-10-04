import { getToken } from "./auth";

export const WCA_DEV_ORIGIN = "https://staging.worldcubeassociation.org";
export const WCA_PROD_ORIGIN = "https://www.worldcubeassociation.org";
export const WCA_ORIGIN = import.meta.env.PROD ? WCA_PROD_ORIGIN : WCA_DEV_ORIGIN;

export const wcaApiRequest = (
  path: string,
  method = "GET",
  apiPrefix = true,
  body?: unknown
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  const token = getToken();
  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }
  const url = apiPrefix
    ? `${WCA_ORIGIN}/api/v0/${path}`
    : `${WCA_ORIGIN}/${path}`;
  return fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: headers,
  });
};
