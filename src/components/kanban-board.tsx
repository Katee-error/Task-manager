import { Box, Container, Flex, Grid, Heading, HStack } from "@chakra-ui/react";

import React from "react";
import { SearchBar } from "./search-bar";
import TaskColumn from "./task-column";
import { doneTasks, inProgressTasks, reviewTasks, todoTasks } from "data/tasks";

export const KanbanBoard: React.FC = () => {
  return (
    <Box pt="60px" pb="48px" h="100vh">
      <Container maxW={"container.xl"}>
        <Flex justifyContent={"space-between"} alignItems={"baceline"}>
          <Heading>Your tasks</Heading>
          <SearchBar />
        </Flex>
        <HStack
          justify="space-between"
          align="start"
          overflowX="auto"
          spacing="40px"
          maxH="calc(100vh - 190px)"
          overflow="hidden"
        >
          <TaskColumn title="To Do" tasks={todoTasks} />
          <TaskColumn title="In Progress" tasks={inProgressTasks} />
          <TaskColumn title="Review" tasks={reviewTasks} />
          <TaskColumn title="Done" tasks={doneTasks} />
        </HStack>
      </Container>
    </Box>
  );
};
