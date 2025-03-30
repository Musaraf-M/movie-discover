import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Grid,
  HStack,
  Image,
  Spinner,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useMovieDetail } from "../hooks/useMovieDetail";

interface MovieDetailContentProps {
  id: number;
}

const MovieDetailContent: React.FC<MovieDetailContentProps> = ({ id }) => {
  const { data, isLoading, isError } = useMovieDetail(String(id));

  if (isLoading)
    return (
      <VStack w="full" h="50vh" justifyContent="center">
        <Spinner size="xl" />
      </VStack>
    );
  if (isError || !data)
    return <Text color="red.400">Error loading movie details</Text>;

  const userVotePercent = Math.floor(data.vote_average * 10);

  return (
    <VStack p={4} alignItems="flex-start">
      <Image
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        alt={data.title}
        boxSize="2xl"
        objectFit={"cover"}
        borderRadius="md"
        _hover={{ transform: "scale(1.01)", transition: "0.3s" }}
        fallback={<Spinner size="xl" />}
        loading="lazy"
        onClick={() => {
          window.open(`https://www.themoviedb.org/movie/${data.id}`, "_blank");
        }}
        cursor="pointer"
      />
      <HStack>
        <Text fontSize="2xl" fontWeight="bold">
          {data.title} ({data.release_date.split("-")[0]})
        </Text>
        <CircularProgress value={userVotePercent} color="green.400">
          <CircularProgressLabel>{userVotePercent}%</CircularProgressLabel>
        </CircularProgress>
      </HStack>
      <Text>{data.overview}</Text>

      {data.genres.length ? (
        <>
          <Text mt={4} fontWeight="bold">
            Genres:
          </Text>
          <HStack>
            {data.genres.map((genre) => (
              <Tag
                key={genre.id}
                size="sm"
                variant="solid"
                colorScheme="teal"
                p={2}
                textAlign="center"
                cursor="pointer"
              >
                {genre.name}
              </Tag>
            ))}
          </HStack>
        </>
      ) : null}

      {data.production_companies.length ? (
        <>
          <Text mt={4} fontWeight="bold">
            Production Companies:
          </Text>
          <Box w="full">
            <HStack>
              {data.production_companies.map((company) => (
                <Tag
                  key={company.id}
                  size="sm"
                  variant="solid"
                  colorScheme="teal"
                  p={2}
                  textAlign="center"
                  cursor="pointer"
                >
                  {company.name}
                </Tag>
              ))}
            </HStack>
          </Box>
        </>
      ) : null}
      {data.spoken_languages.length ? (
        <>
          <Text mt={4} fontWeight="bold">
            Languages:
          </Text>
          <HStack>
            {data.spoken_languages.map((language) => (
              <Tag
                key={language.iso_639_1}
                size="sm"
                variant="solid"
                colorScheme="teal"
                p={2}
                textAlign="center"
                cursor="pointer"
              >
                {language.name}
              </Tag>
            ))}
          </HStack>
        </>
      ) : null}

      {data.production_countries.length ? (
        <>
          <Text mt={4} fontWeight="bold">
            Production Countries:
          </Text>
          <Box w="full">
            <HStack>
              {data.production_countries.map((country) => (
                <Tag
                  key={country.iso_3166_1}
                  size="sm"
                  variant="solid"
                  colorScheme="teal"
                  p={2}
                  textAlign="center"
                  cursor="pointer"
                >
                  {country.name}
                </Tag>
              ))}
            </HStack>
          </Box>
        </>
      ) : null}

      {data.credits.cast.length ? (
        <Text mt={4} fontWeight="bold">
          Cast:
        </Text>
      ) : null}
      <Box w="full">
        <Grid templateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap={4}>
          {data.credits.cast.map((actor) =>
            actor.profile_path ? (
              <VStack key={actor.id}>
                <Image
                  src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                  alt={actor.name}
                  borderRadius="full"
                  boxSize="100px"
                  objectFit="cover"
                  fallback={<Spinner size="xl" />}
                  loading="lazy"
                  _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
                  onClick={() => {
                    window.open(
                      `https://www.themoviedb.org/person/${actor.id}`,
                      "_blank"
                    );
                  }}
                  cursor="pointer"
                />
                <Text fontSize="sm" textAlign="center">
                  {actor.name}
                </Text>
              </VStack>
            ) : null
          )}
        </Grid>
      </Box>
    </VStack>
  );
};

export default MovieDetailContent;
