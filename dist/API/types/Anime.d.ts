export interface Anime {
    id: number;
    anilist_id: number;
    mal_id: number | null;
    format: AnimeFormat;
    status: AnimeStatus;
    titles: Map<string, string>;
    descriptions: Map<string, string>;
    start_date: Date | null;
    end_date: Date | null;
    season_period: AnimeSeasonPeriod;
    season_year: number | null;
    episodes_count: number;
    episode_duration: number | null;
    trailer_url: string | null;
    cover_image: string;
    cover_color: string;
    banner_image: string;
    genres: string[];
    sequel: number | null;
    prequel: number | null;
    score: number;
}
export declare enum AnimeWeeklyAiringDay {
    'Sunday' = 0,
    'Monday' = 1,
    'Tuesday' = 2,
    'Wednesday' = 3,
    'Thursday' = 4,
    'Friday' = 5,
    'Saturday' = 6
}
export declare enum AnimeFormat {
    'TV' = 0,
    'TV_SHORT' = 1,
    'MOVIE' = 2,
    'SPECIAL' = 3,
    'OVA' = 4,
    'ONA' = 5,
    'MUSIC' = 6
}
export declare enum AnimeStatus {
    'FINISHED' = 0,
    'RELEASING' = 1,
    'NOT_YET_RELEASED' = 2,
    'CANCELLED' = 3
}
export declare enum AnimeSeasonPeriod {
    'WINTER' = 0,
    'SPRING' = 1,
    'SUMMER' = 2,
    'FALL' = 3,
    'UNKNOWN' = 4
}
