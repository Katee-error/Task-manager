import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useSearch } from "data/tasks/hooks";
import React, { ChangeEvent, useCallback } from "react";

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
        <InputLeftElement pointerEvents="none"></InputLeftElement>
        <Input
          fontSize={"16px"}
          w={"430px"}
          bg="rgba(255, 255, 255, 0.07)"
          py={"20px"}
          type="text"
          borderRadius={"20px"}
          border={"1px solid #5B5A5B"}
          _hover={{
            border: "1px solid #0184CF",
          }}
          _focus={{
            border: "4px solid rgba(1, 132, 207, 0.5)",
          }}
          placeholder="Поиск..."
          value={search}
          onChange={onChange}
        />
      </InputGroup>
    </Box>
  );
};
