import { Container, Flex, Heading, HStack, VStack } from "@chakra-ui/react";

import React from "react";
import { SearchBar } from "./search-bar";
import { KanbanColumn } from "./kanban-column";
import { useTasksByStatus } from "data/tasks/hooks";

export const KanbanBoard: React.FC = () => {
  const tasksByStatus = useTasksByStatus();
  return (
    <VStack pt="60px" pb="48px" h="100vh" justifyItems="start">
      <Container maxW="1920px" maxH="100%" display="flex" flexDir="column">
        <Flex justifyContent={"space-between"} alignItems={"baseline"}>
          <Heading>Your tasks</Heading>
          <SearchBar />
        </Flex>
        <HStack
          justify="space-between"
          align="start"
          overflowX="auto"
          justifyContent="start"
          spacing="40px"
        >
          <KanbanColumn title="To Do" tasks={tasksByStatus["todo"]} />
          <KanbanColumn
            title="In Progress"
            tasks={tasksByStatus["in_progress"]}
          />
          <KanbanColumn title="Review" tasks={tasksByStatus["review"]} />
          <KanbanColumn title="Done" tasks={tasksByStatus["done"]} />
        </HStack>
      </Container>
    </VStack>
  );
};
