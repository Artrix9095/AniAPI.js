import { AnimeFormat, AnimeStatus, AnimeSongType, AnimeSeasonPeriod } from '../types';
export declare type AnimeFilters = {
    title?: string;
    anilist_id?: number;
    mal_id?: number;
    formats?: AnimeFormat[];
    status?: AnimeStatus[];
    year?: number;
    season?: number;
    genres?: string[];
    nsfw?: boolean;
};
export declare type EpisodeFilters = {
    anime_id?: number;
    number?: number;
    source?: string;
    locale?: string;
    is_dub?: boolean;
};
export declare type SongFilters = {
    anime_id?: number;
    title?: string;
    artist?: string;
    year?: number;
    season?: AnimeSeasonPeriod[];
    type?: AnimeSongType[];
};
export declare type UserFilters = {
    username?: string;
    email?: string;
};
