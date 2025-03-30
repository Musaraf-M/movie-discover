import { Grid, Text, VStack } from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { useMoviesByIds } from "../hooks/useMoviesByIds";
import { useWatchlist } from "../WatchlistContext";
import MovieDetail from "./MovieDetails";

const Watchlist = () => {
  const { watchlist } = useWatchlist();
  const { data: movies, isLoading } = useMoviesByIds(watchlist);

  return (
    <VStack w="full" alignItems="normal" p="4">
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </Grid>
      )}
      <MovieDetail />
    </VStack>
  );
};

export default Watchlist;
