import { Competition } from "@wca/helpers";
import { WCACompetition } from "./interface";
import { wcaApiRequest } from "./request";

export const getUpcomingManageableCompetitions = async () => {
    const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const params = `managed_by_me=true&start=${oneWeekAgo.toISOString()}&sort=start_date`;
    const response = await wcaApiRequest(`competitions?${params}`);
    return await response.json();
};

export const searchCompetitions = async (name: string) => {
    try {
        const today = new Date();
        let start = "";
        if (name.length < 1) {
            start = `${today.getFullYear()}-${(today.getMonth() + 1)
                .toString()
                .padStart(
                    2,
                    "0"
                )}-${today.getDate().toString().padStart(2, "0")}`;
        }
        const response = await wcaApiRequest(
            `competitions?q=${name}&start=${start}&per_page=50&sort=start_date`
        );
        const data = await response.json();
        return data.filter(
            (competition: WCACompetition) =>
                new Date(competition.start_date).getFullYear() >= 2023
        );
    } catch {
        return [];
    }
};

export const formatDates = (startDate: string, endDate: string) => {
    if (startDate === endDate) {
        return startDate;
    }
    return `${startDate} - ${endDate}`;
};

// @wca/helpers still models WCIF v1 (e.g. Round.advancementCondition), so only
// the parts of it that are unchanged in WCIF v2 are used here.
export type Wcif = Pick<Competition, "formatVersion" | "id" | "name" | "persons">;

export const getCompetitionWcif = async (competitionId: string): Promise<Wcif> => {
    // Pinned to major version 2: the unversioned and `latest` endpoints follow new majors.
    const response = await wcaApiRequest(`competitions/${competitionId}/wcif/version/2`);
    if (!response.ok) {
        throw new Error(`Fetching WCIF for ${competitionId} failed with status ${response.status}`);
    }
    return await response.json();
};

export const getCompetitionBasicInfo = async (competitionId: string) => {
    const response = await wcaApiRequest(`competitions/${competitionId}`);
    return await response.json();
};