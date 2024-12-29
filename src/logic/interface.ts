export interface UserInfo {
    me: {
        name: string;
        avatar: Avatar;
    };
}

export interface Avatar {
    url: string;
    thumb_url: string;
}

export interface WCACompetition {
    id: string;
    name: string;
    url: string;
    country_iso2: string;
    registration_open: string;
    start_date: string;
    end_date: string;
    delegates: Delegate[];
}

export interface Delegate {
    id: number;
    wca_id: string;
    name: string;
    url: string;
    email: string;
    avatar: Avatar;
}

export interface WCAPerson {
    wcaId: string;
    name: string;
    avatarUrl: string;
    upcomingCompetitions?: WCACompetition[];
}