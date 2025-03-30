export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  genres: { id: number; name: string }[];
  runtime: number;
  tagline: string;
  credits: {
    cast: {
      name: string;
      character: string;
      profile_path: string;
      id: string;
    }[];
    crew: { name: string; job: string; profile_path: string }[];
  };
  production_companies: { name: string; logo_path: string; id: string }[];
  production_countries: { name: string; iso_3166_1: string }[];
  spoken_languages: { name: string; iso_639_1: string }[];
  user_vote_count: number;
  user_vote_average: number;
  user_vote_percent: number;
}

export interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
}
