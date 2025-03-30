import { Box, Grid, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../hooks/useMovieDetail";

const MovieDetailContent = ({ id }) => {
  const { data, isLoading, isError } = useMovieDetail(id);

  if (isLoading)
    return (
      <VStack w="full" h="50vh" justifyContent="center">
        <Spinner size="xl" />
      </VStack>
    );
  if (isError || !data)
    return <Text color="red.400">Error loading movie details</Text>;

  return (
    <VStack p={4} alignItems="flex-start">
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        boxSize="2xl"
      />
      <Text fontSize="2xl" fontWeight="bold">
        {data.title} ({data.release_date.split("-")[0]})
      </Text>
      <Text>{data.overview}</Text>

      <Text mt={4} fontWeight="bold">
        Cast:
      </Text>
      <Box w="full">
        <Grid templateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap={4}>
          {data.credits.cast.map((actor) =>
            actor.profile_path ? (
              <Box key={actor.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                />
                <Text fontSize="sm">{actor.name}</Text>
              </Box>
            ) : null
          )}
        </Grid>
      </Box>
    </VStack>
  );
};

export default MovieDetailContent;
