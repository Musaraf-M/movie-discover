import { Box, Image, Text } from "@chakra-ui/react";
import { Link, useSearchParams } from "react-router-dom";
import { Movie } from "../types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  const [_, setSearchParams] = useSearchParams();
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
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
        borderRadius="md"
        _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
      />
      <Text fontWeight="bold" mt={2} textColor="headerText">
        {movie.title} ({movie?.release_date?.split("-")?.[0]})
      </Text>
      <Text fontSize="sm">⭐ {movie?.vote_average?.toFixed(1)}</Text>
    </Box>
  );
};

export default MovieCard;
