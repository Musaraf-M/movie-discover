import { Box, Grid, Spinner, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import InfiniteScrollTrigger from "../components/InfiniteScrollTrigger";
import MovieCard from "../components/MovieCard";
import MovieFilters from "../components/MovieFilters";
import SearchBar from "../components/SearchBar";
import { useMovies } from "../hooks/useFetchMovies";

const Home = () => {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState<{
    genre?: number;
    year?: number;
    rating?: [number, number];
  }>({});

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError } =
    useMovies(query, filters);

  const movies = data?.pages.flatMap((page) => page.results) || [];

  return (
    <VStack w="full" alignItems="normal" p="4">
      <SearchBar query={query} setQuery={setQuery} />
      <MovieFilters filters={filters} setFilters={setFilters} />

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
