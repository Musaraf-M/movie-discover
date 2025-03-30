import {
  Box,
  Container,
  Grid,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { fetchMovies, Movie } from "../utils/api";

const Home = () => {
  console.log("check");

  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchMovies<Movie>("/movie/popular")
      .then((data) => setMovies(data.results))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container maxW="container.xl" py={6}>
      <Heading mb={6} textAlign="center">
        Popular Movies
      </Heading>

      {loading ? (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      ) : (
        <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
          {movies.map((movie) => (
            <Box
              key={movie.id}
              p={4}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
                borderRadius="md"
                _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
              />
              <Text fontWeight="bold" mt={2}>
                {movie.title} ({movie.release_date.split("-")[0]})
              </Text>
              <Text fontSize="sm">⭐ {movie.vote_average.toFixed(1)}</Text>
            </Box>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
