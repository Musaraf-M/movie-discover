import { useInfiniteQuery } from "@tanstack/react-query";
import { MovieResponse } from "../types/movie";
import { fetchMovies } from "../utils/api";

export const useMovies = (
  query: string,
  filters: { genre?: number; year?: number; rating?: [number, number] }
) => {
  return useInfiniteQuery<MovieResponse>({
    queryKey: ["movies", query, filters],
    queryFn: ({ pageParam = 1 }) => fetchMovies(query, pageParam, filters),
    getNextPageParam: (lastPage) => {
      return lastPage.page < lastPage.total_pages
        ? lastPage.page + 1
        : undefined;
    },
  });
};
