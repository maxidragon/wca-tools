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