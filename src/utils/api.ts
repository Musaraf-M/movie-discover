import { Movie, MovieResponse } from "@/types/movie";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovies = async (
  query: string = "",
  pageParam: number = 1,
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

export const fetchMovieDetail = async (id: string): Promise<Movie> => {
  const { data } = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: { api_key: API_KEY, append_to_response: "credits" },
  });
  return data;
};

export const fetchMoviesByIds = async (ids: number[]) => {
  if (!ids.length) return [];
  const promises = ids.map((id) =>
    axios.get(`${BASE_URL}/movie/${id}`, { params: { api_key: API_KEY } })
  );
  const responses = await Promise.all(promises);
  return responses.map((res) => res.data);
};
