import { Box, Container, Flex, Grid, Heading } from "@chakra-ui/react";

import React from "react";
import { SearchBar } from "./search-bar";
import TaskColumn from "./task-column";

export const KanbanBoard: React.FC = () => {
  return (
    <Box py={"60px"}>
      <Container maxW={"container.xl"}>
        <Flex justifyContent={"space-between"} alignItems={"baceline"}>
          <Heading>Your tasks</Heading>
          <SearchBar />
        </Flex>
        <Grid>
          <Flex justify="space-between" overflowX="auto">
            <TaskColumn title="To Do" />
            <TaskColumn title="In Progress" />
            <TaskColumn title="Review" />
            <TaskColumn title="Done" />
          </Flex>
        </Grid>
      </Container>
    </Box>
  );
};
