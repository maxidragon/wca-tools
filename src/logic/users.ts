import { wcaApiRequest } from "./request";

export const searchPersons = async (search: string) => {
  const response = await wcaApiRequest(`persons?q=${search}`);
  const data = await response.json();
  return data.map(
    (p: {
      person: { wca_id: string; name: string; avatar: { thumb_url: string } };
    }) => {
      return {
        wcaId: p.person.wca_id,
        name: p.person.name,
        avatarUrl: p.person.avatar.thumb_url,
      };
    }
  );
};
