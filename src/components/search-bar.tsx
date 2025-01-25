import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useSearch } from "data/tasks/hooks";
import React, { ChangeEvent, useCallback } from "react";
import { SearchIcon } from "./icons/search-icon";

export const SearchBar: React.FC = () => {
  const { search, setSearch } = useSearch();

  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setSearch(value);
    },
    [setSearch]
  );

  return (
    <Box>
      <InputGroup mb={"40px"} flex="1">
        <InputLeftElement left="8px" pointerEvents="none" color="primaryText">
          <SearchIcon boxSize="24px" />
        </InputLeftElement>
        <Input
          fontSize={"16px"}
          w={"430px"}
          bg="rgba(255, 255, 255, 0.07)"
          py={"20px"}
          color='primaryText'
          pl="64px"
          type="text"
          borderRadius={"20px"}
          border="1px solid"
          borderColor="inputBorder"
          _hover={{
            borderColor: "primary",
          }}
          _focus={{
            boxShadow: "activeInput",
            borderColor: "primary",
          }}
          placeholder="Поиск..."
          value={search}
          onChange={onChange}
        />
      </InputGroup>
    </Box>
  );
};
