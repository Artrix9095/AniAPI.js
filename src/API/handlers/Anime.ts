import {
    Anime as AnimeType,
    AnimeFormat,
    AnimeStatus,
    AnimeSeasonPeriod,
    AnimeWeeklyAiringDay,
} from '../types';
export class Anime implements AnimeType {
    /**
     *
     * @param {number} id -
     * @param {number} anilist_id -
     * @param {number | null} mal_id -
     * @param {Enumerator<AnimeFormat>} format -
     * @param {Enumerator<AnimeStatus>} status -
     * @param {Map<string, string>} titles -
     * @param {Map<string, string>} descriptions -
     * @param {Date} start_date -
     * @param {Date} end_date -
     * @param {Enumerator<AnimeWeeklyAiringDay>} weekly_airing_day -
     * @param {Enumerator<AnimeSeasonPeriod>} season_period -
     * @param {number | null} season_year -
     * @param {number} episodes_count -
     * @param {number | null} episode_duration -
     * @param {string} trailer_url -
     * @param {string} cover_image -
     * @param {string} cover_color -
     * @param {string} banner_image -
     * @param {string[]} genres -
     * @param {number | null} sequel -
     * @param {number | null} prequel -
     * @param {number} score
     */
    /**
     * Unique identifier for an Anime.
     */
    id: number;
    /**
     * [AniList](https://anilist.co/) external unique identifier.
     */
    anilist_id: number;
    /**
     * [MyAnimeList](https://myanimelist.net/) external unique identifier.
     */
    mal_id: number;
    /**
     * The show's format destination.
     */
    format: AnimeFormat;
    /**
     * The show's global release status.
     */
    status: AnimeStatus;
    /**
     * A dictionary of the show's titles organized by localization.
     */
    titles: Map<string, string>;
    /**
     * A dictionary of the show's descriptions organized by localization.
     */
    descriptions: Map<string, string>;
    /**
     * The show's global release date.
     */
    start_date: Date;
    /**
     * The known show's global end date.
     */
    end_date: Date;
    /**
     * The season on which the show has been released.
     */
    season_period: AnimeSeasonPeriod;
    /**
     * The year on which the show has been released.
     */
    season_year: number;
    /**
     * Number of episodes released for the show.
     */
    episodes_count: number;
    /**
     * The show's episode average duration in minutes.
     */
    episode_duration: number;
    /**
     * External link to the show's trailer video. Possible services: Youtube, Dailymotion
     */
    trailer_url: string;
    /**
     * The show's cover image.
     */
    cover_image: string;
    /**
     * The show's cover main color, in `HEX` format.
     */
    cover_color: string;
    /**
     * The show's banner image.
     */
    banner_image: string;
    /**
     * A collection of the show's associated genres. You can find all possible values [here](https://api.aniapi.com/v1/resources/1.0/0).
     */
    genres: string[];
    /**
     * The show's precedent Anime's unique identifier in story-line.
     */
    sequel: number;
    /**
     * The show's successive Anime's unique identifier in story-line.
     */
    prequel: number;
    /**
     * The show's global appreciation indicator. Minimum value is `0` and maximum is `100`.
     */
    score: number;
    constructor(data: AnimeType) {
        Object.assign(this, {
            ...data,
            end_date: new Date(data.end_date),
            start_date: new Date(data.start_date),
            titles: new Map(Object.entries(data.titles as any)),
            descriptions: new Map(Object.entries(data.descriptions as any)),
        });
    }
}
