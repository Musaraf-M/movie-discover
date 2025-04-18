import { Grid, Spinner, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import InfiniteScrollTrigger from "../components/InfiniteScrollTrigger";
import MovieCard from "../components/MovieCard";
import MovieFilters from "../components/MovieFilters";
import SearchBar from "../components/SearchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useMovies } from "../hooks/useFetchMovies";
import MovieDetail from "./MovieDetails";
export interface FilterType {
  genre?: number;
  year?: number;
  rating?: [number, number];
}

const Home = () => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  const [filters, setFilters] = useState<FilterType>({});

  const debouncedFilters = useDebounce(filters, 500);

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError } =
    useMovies(debouncedQuery, debouncedFilters);

  const movies = data?.pages.flatMap((page) => (page as any).results) || [];

  return (
    <VStack w="full" alignItems="normal" p="4">
      <SearchBar query={query} setQuery={setQuery} />
      <MovieFilters filters={filters} setFilters={setFilters} />
      <MovieDetail />
      {isError && <Text color="red.400">Error loading movies.</Text>}

      <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={4}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>

      {(isLoading || isFetching) && (
        <VStack>
          <Spinner size="xl" mt={4} textAlign="center" />
        </VStack>
      )}

      {hasNextPage && <InfiniteScrollTrigger loadMore={fetchNextPage} />}
    </VStack>
  );
};

export default Home;
