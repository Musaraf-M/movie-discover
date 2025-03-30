import { useQuery } from "@tanstack/react-query";
import { fetchMovieDetail } from "../utils/api";

export const useMovieDetail = (id: string) => {
  return useQuery({
    queryKey: ["movieDetail", id],
    queryFn: () => fetchMovieDetail(id),
    enabled: !!id,
  });
};
