import {
  Container,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";

import React from "react";
import { SearchBar } from "./search-bar";
import { KanbanColumn } from "./kanban-column";
import { useDragControls, useTasksByStatus } from "data/tasks/hooks";
import { DndContext, closestCorners } from "@dnd-kit/core";

export const KanbanBoard: React.FC = () => {
  const tasksByStatus = useTasksByStatus();
  const { dragStartHandler, dragEndHandler, dragOverHandler } =
    useDragControls();

  return (
    <VStack pt="60px" pb="48px" h="100vh" justifyItems="start">
      <Container maxW="1920px" maxH="100%" display="flex" flexDir="column">
        <Flex justifyContent={"space-between"} alignItems={"baseline"}>
          <Heading>Your tasks</Heading>
          <SearchBar />
        </Flex>
        <DndContext
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
          onDragOver={dragOverHandler}
          collisionDetection={closestCorners}
          autoScroll={{ threshold: { x: 0, y: 0.2 } }}
        >
          <HStack
            align="start"
            overflowX="auto"
            justifyContent="start"
            spacing="20px"
          >
            <KanbanColumn
              backgroundColor="linear-gradient(90deg, #f2994a, #f2c94c)"
              title="To Do"
              tasks={tasksByStatus["todo"]}
              type="todo"
            />
            <KanbanColumn
              backgroundColor="linear-gradient(90deg, #bb6bd9, #e056fd)"
              title="In Progress"
              tasks={tasksByStatus["in_progress"]}
              type="in_progress"
            />
            <KanbanColumn
              backgroundColor="linear-gradient(90deg, #2d9cdb, #56ccf2)"
              title="Review"
              tasks={tasksByStatus["review"]}
              type="review"
            />
            <KanbanColumn
              backgroundColor="linear-gradient(90deg, #27ae60, #6fcf97)"
              title="Done"
              tasks={tasksByStatus["done"]}
              type="done"
            />
          </HStack>
        </DndContext>
      </Container>
    </VStack>
  );
};
