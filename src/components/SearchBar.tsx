import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";

const SearchBar = ({
  query,
  setQuery,
}: {
  query: string;
  setQuery: (q: string) => void;
}) => {
  return (
    <Flex gap={2}>
      <Input
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="sm"
        focusBorderColor="teal.500"
        variant="filled"
        borderRadius="md"
        _placeholder={{ color: "gray.500" }}
      />
      {query && (
        <IconButton
          icon={<CloseIcon />}
          aria-label="Clear search"
          onClick={() => setQuery("")}
          size="sm"
        />
      )}
      <IconButton icon={<SearchIcon />} aria-label="Search" size="sm" />
    </Flex>
  );
};

export default SearchBar;
