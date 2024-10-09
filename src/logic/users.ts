import { WCACompetition } from "./interface";
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

export const getUser = async (wcaId: string) => {
  const response = await wcaApiRequest(`users/${wcaId}?upcoming_competitions=true`);
  const data = await response.json();
  return {
    wcaId: data.user.wca_id,
    name: data.user.name,
    avatarUrl: data.user.avatar.url,
    upcomingCompetitions: data.upcoming_competitions.sort((a: WCACompetition, b: WCACompetition) => a.start_date.localeCompare(b.start_date)),
  }
};