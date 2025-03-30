import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

export const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} display="flex" justifySelf="flex-end">
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
