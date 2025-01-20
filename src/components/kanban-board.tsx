import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";

import React from "react";
import { SearchBar } from "./search-bar";

interface Props {
  className?: string;
}

export const KanbanBoard: React.FC<Props> = ({ className }) => {
  return (
    <Box py={'60px'}>
      <Container maxW={'container.xl'}>
        <Flex justifyContent={'space-between'} alignItems={'baceline'}>
          <Heading>Your tasks</Heading>
          <SearchBar/>
        </Flex>
        <Grid>
            
        </Grid>
      </Container>
    </Box>
  );
};
