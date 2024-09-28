import { getToken } from "./auth";

export const WCA_ORIGIN = "https://www.worldcubeassociation.org";

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
