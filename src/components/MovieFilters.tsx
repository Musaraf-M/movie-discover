import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FilterType } from "../pages/Home";

interface MovieFiltersProps {
  filters: FilterType;
  setFilters: React.Dispatch<React.SetStateAction<FilterType>>;
}

const MovieFilters: React.FC<MovieFiltersProps> = ({ filters, setFilters }) => {
  return (
    <Box display="flex" gap={4} mb={4}>
      <Select
        placeholder="Select Genre"
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, genre: Number(e.target.value) }))
        }
        size="sm"
        variant="filled"
        _placeholder={{ color: "gray.200" }}
        borderRadius="md"
      >
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
      </Select>

      <Select
        placeholder="Select Year"
        onChange={(e) =>
          setFilters((prev) => ({ ...prev, year: Number(e.target.value) }))
        }
        size="sm"
        variant="filled"
        _placeholder={{ color: "gray.200" }}
        borderRadius="md"
      >
        {[2024, 2023, 2022, 2021].map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </Select>
      <VStack w="container.sm" alignItems="flex-start" spacing={0}>
        <Text
          size="sm"
          fontWeight="bold"
          color="gray.600"
          fontSize="sm"
          textAlign="left"
          mb={1}
        >
          Rating
        </Text>
        <RangeSlider
          defaultValue={[0, 10]}
          min={0}
          max={10}
          step={0.5}
          onChange={(val) =>
            setFilters((prev) => ({ ...prev, rating: val as [number, number] }))
          }
          value={filters.rating}
          colorScheme="teal"
          size="sm"
          aria-label={["min", "max"]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <Tooltip
            hasArrow
            label={filters.rating?.[0]}
            bg="gray.300"
            color="black"
          >
            <RangeSliderThumb index={0} />
          </Tooltip>
          <Tooltip
            hasArrow
            label={filters.rating?.[1]}
            bg="gray.300"
            color="black"
          >
            <RangeSliderThumb index={1} />
          </Tooltip>
        </RangeSlider>
      </VStack>
    </Box>
  );
};

export default MovieFilters;
