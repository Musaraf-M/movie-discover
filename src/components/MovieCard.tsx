import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { Movie } from "../types/movie";
import { useWatchlist } from "../WatchlistContext";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const [_, setSearchParams] = useSearchParams();
  const { watchlist, toggleWatchlist } = useWatchlist();
  const isInWatchlist = watchlist.includes(movie.id);
  if (!movie.id) return null;

  return (
    <Box
      key={movie.id}
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
      onClick={() => setSearchParams(`id=${movie.id}`)}
      _hover={{ boxShadow: "lg", transition: "0.3s" }}
      transition="0.3s"
      bg="cardBackground"
      borderColor="cardBorder"
    >
      <VStack w="full" alignItems="flex-start">
        <Image
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          borderRadius="md"
          _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
        />
        <Text fontWeight="bold" mt={2} textColor="headerText">
          {movie.title} ({movie?.release_date?.split("-")?.[0]})
        </Text>

        <HStack w="full" justifyContent="space-between">
          <Text fontSize="sm">⭐ {movie?.vote_average?.toFixed(1)}</Text>
          <Button
            colorScheme={isInWatchlist ? "red" : "teal"}
            size="xs"
            onClick={(e) => {
              e.stopPropagation();
              toggleWatchlist(movie.id);
            }}
          >
            {isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MovieCard;
