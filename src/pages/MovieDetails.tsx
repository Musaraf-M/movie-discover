import { useParams } from "react-router-dom";
import { Box, Text, Heading } from "@chakra-ui/react";

const MovieDetail = () => {
  const { id } = useParams();

  return (
    <Box>
      <Heading>Movie Details</Heading>
      <Text>Movie ID: {id}</Text>
    </Box>
  );
};

export default MovieDetail;
