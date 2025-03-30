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
        size="lg"
        focusBorderColor="teal.500"
      />
      {query && (
        <IconButton
          icon={<CloseIcon />}
          aria-label="Clear search"
          onClick={() => setQuery("")}
        />
      )}
      <IconButton icon={<SearchIcon />} aria-label="Search" />
    </Flex>
  );
};

export default SearchBar;
