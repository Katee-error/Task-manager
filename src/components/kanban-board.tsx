import { Container, Flex, Heading, HStack, VStack } from "@chakra-ui/react";

import React from "react";
import { SearchBar } from "./search-bar";
import { KanbanColumn } from "./kanban-column";
import { useDragControls, useTasksByStatus } from "data/tasks/hooks";
import { LaughIcon } from "./icons/laugh-icon";
import { SmileIcon } from "./icons/smile-icon";
import { SmileInvertedIcon } from "./icons/smile-inverted-icon";
import { GhostIcon } from "./icons/ghost-icon";
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
            justify="space-between"
            align="start"
            overflowX="auto"
            justifyContent="start"
            spacing="40px"
          >
            <KanbanColumn
              icon={<LaughIcon boxSize="24px" color="primaryText" />}
              title="To Do"
              tasks={tasksByStatus["todo"]}
              type="todo"
            />
            <KanbanColumn
              icon={<SmileIcon boxSize="24px" color="primaryText" />}
              title="In Progress"
              tasks={tasksByStatus["in_progress"]}
              type="in_progress"
            />
            <KanbanColumn
              icon={<SmileInvertedIcon boxSize="24px" color="primaryText" />}
              title="Review"
              tasks={tasksByStatus["review"]}
              type="review"
            />
            <KanbanColumn
              icon={<GhostIcon boxSize="24px" color="primaryText" />}
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
