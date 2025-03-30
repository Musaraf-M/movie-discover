import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import theme from "./theme";
import { WatchlistProvider } from "./WatchlistContext";

const App = () => {
  // const theme = extendTheme({});
  return (
    <ChakraProvider theme={theme}>
      <WatchlistProvider>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Router>
          <Navbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<Watchlist />} />
            </Routes>
          </Navbar>
        </Router>
      </WatchlistProvider>
    </ChakraProvider>
  );
};

export default App;
