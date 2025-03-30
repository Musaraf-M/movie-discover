import { Button, Container, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ToggleThemeButton } from "./ToggleThemeButton";

const Navbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Container maxW="container.xl" py={6}>
      <HStack w="full" justifyContent="space-between">
        <Text fontSize="3xl" fontWeight="900" textColor="headerText">
          Movie Discover
        </Text>
        <HStack>
          <Link to="/">
            <Button size="sm">Home</Button>
          </Link>
          <Link to="/watchlist">
            <Button size="sm">Watchlist</Button>
          </Link>
          <ToggleThemeButton />
        </HStack>
      </HStack>
      {children}
    </Container>
  );
};

export default Navbar;
