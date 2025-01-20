import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
// import { Search } from 'lucide-react';


export const SearchBar: React.FC = ({  }) => {
  return (
    <Box>
      <InputGroup mb={"40px"} flex="1" >
      <InputLeftElement pointerEvents='none'>
      {/* <Search /> */}
    </InputLeftElement>
        <Input
          fontSize={"16px"}
          w={"430px"}
          bg="rgba(255, 255, 255, 0.07)"
          py={"20px"}
          type="text"
          borderRadius={"20px"}
          border={"1px solid #5B5A5B"}
          _hover={{
            border:'1px solid #0184CF'
          }}
          _focus={{
            border: "4px solid rgba(1, 132, 207, 0.5)"
          }}
          //   value={searchTerm}
          //   onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Поиск..."
          //   focusBorderColor={"brand.main"}
        />
      </InputGroup>
    </Box>
  );
};