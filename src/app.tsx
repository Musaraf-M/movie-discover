import {
  ChakraProvider,
  ColorModeScript,
  Container,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToggleThemeButton } from "./components/ToggleThemeButton";
import Home from "./pages/Home";
import theme from "./theme";

const App = () => {
  // const theme = extendTheme({});
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Container maxW="container.xl" py={6}>
          <HStack w="full" justifyContent="space-between">
            <Text fontSize="3xl" fontWeight="900" textColor="headerText">
              Movie Discover
            </Text>
            <ToggleThemeButton />
          </HStack>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </ChakraProvider>
  );
};

export default App;
