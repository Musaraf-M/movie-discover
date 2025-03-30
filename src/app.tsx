import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetails";

const App = () => {
  const theme = extendTheme({});
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Container maxW="container.xl" py={6}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;
