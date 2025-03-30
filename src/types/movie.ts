export interface Movie {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    vote_average: number;
  }
  
  export interface MovieResponse {
    results: Movie[];
    page: number;
    total_pages: number;
  }
  