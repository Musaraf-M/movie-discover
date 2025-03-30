import axios from "axios";

const API_KEY: string = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL: string = "https://api.themoviedb.org/3";

// Define types for API responses
export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  vote_average: number;
}

export interface ApiResponse<T> {
  results: T[];
}

export const fetchMovies = async <T>(endpoint: string): Promise<ApiResponse<T>> => {
  try {
    const response = await axios.get<ApiResponse<T>>(`${BASE_URL}${endpoint}`, {
      params: { api_key: API_KEY },
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
