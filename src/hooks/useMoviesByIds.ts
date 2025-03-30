import { useQuery } from "@tanstack/react-query";
import { fetchMoviesByIds } from "../utils/api";

export const useMoviesByIds = (ids: number[]) => {
  return useQuery({
    queryKey: ["watchlistMovies", ids],
    queryFn: () => fetchMoviesByIds(ids),
    enabled: ids.length > 0,
  });
};
