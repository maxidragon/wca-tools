export interface UserInfo {
    me: {
        name: string;
        avatar: {
            thumb_url: string;
        };
    };
}

export interface WCACompetition {
    id: string;
    name: string;
    url: string;
    country_iso2: string;
    registration_open: string;
    start_date: string;
}

export interface WCAPerson {
    wcaId: string;
    name: string;
    avatarUrl: string;
}