import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Theme configuration
const config: ThemeConfig = {
  initialColorMode: "light", // Default theme
  useSystemColorMode: false, // Set true to follow system preference
};

const theme = extendTheme({
  config,
  semanticTokens: {
    colors: {
      headerText: {
        default: "blue.900",
        _dark: "white.500",
      },
    },
  },
});

export default theme;
