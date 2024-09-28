export const WCA_ORIGIN = "https://www.worldcubeassociation.org";

export const wcaApiRequest = (path: string) => {
  return fetch(`${WCA_ORIGIN}/api/v0/${path}`);
};