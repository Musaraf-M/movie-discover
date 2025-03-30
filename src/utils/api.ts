import { Movie, MovieResponse } from "@/types/movie";
import axios from "axios";

// const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY;
// const BASE_URL: string = "https://api.themoviedb.org/3";

// Define types for API responses
// export interface Movie {
//   id: number;
//   title: string;
//   release_date: string;
//   poster_path: string;
//   vote_average: number;
// }

// export interface ApiResponse<T> {
//   results: T[];
// }

// export const fetchMovies = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
//   try {
//     const response = await axios.get<ApiResponse<T>>(`${BASE_URL}${endpoint}`, {
//       params: { api_key: API_KEY },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  query: string = "",
  pageParam = 1,
  filters: { genre?: number; year?: number; rating?: [number, number] } = {}
): Promise<MovieResponse> => {
  const endpoint = query ? "/search/movie" : "/discover/movie";

  const { genre, year, rating } = filters;

  const params: Record<string, any> = {
    api_key: API_KEY,
    query,
    page: pageParam,
  };

  if (genre) params.with_genres = genre;
  if (year) params.primary_release_year = year;
  if (rating) {
    params["vote_average.gte"] = rating[0];
    params["vote_average.lte"] = rating[1];
  }

  const { data } = await axios.get<MovieResponse>(`${BASE_URL}${endpoint}`, {
    params,
  });

  return data;
};
