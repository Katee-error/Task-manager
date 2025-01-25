import React from "react";
import { Text, Heading, HStack, Stack, VStack, Box } from "@chakra-ui/react";
import { TaskCard } from "./task/task-card";
import { Task, TaskType } from "data/tasks/models";
import { SortableContext } from "@dnd-kit/sortable";
import { DragOverlay, useDroppable } from "@dnd-kit/core";
import { useActiveDragItem } from "data/tasks/hooks";
import { useAtom } from "jotai";

interface KanbanColumnProps {
  type: TaskType;
  title: string;
  count?: number | string;
  tasks: Task[];
  backgroundColor: string;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  type,
  title,
  count,
  tasks,
  backgroundColor,
}) => {
  const activeTask = useActiveDragItem();
  const { setNodeRef } = useDroppable({ id: type });

  return (
    <VStack
      maxH="100%"
      w="350px"
      minW="350px"
      p="22px 16px"
      align="start"
      border="1px dashed"
      borderColor="columnBorder"
      borderRadius="20px"
    >
      <HStack
        bg={backgroundColor}
        mb={2}
        w="100%"
        p="4"
        spacing={1}
        borderRadius="10px"
      >
        <Heading as="h2" variant="h2">
          {title}
        </Heading>

        <Box
          borderRadius="full"
          w="30px"
          h="30px"
          pt="3px"
          bgColor="inputBorder"
          fontWeight="700"
          color="primaryText"
          textAlign="center"
        >
          5
        </Box>
      </HStack>
      <Stack
        w="100%"
        spacing={4}
        overflowY="auto"
        minH="135px"
        ref={setNodeRef}
      >
        <SortableContext items={tasks} id={type}>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </Stack>
      <DragOverlay>
        {activeTask ? <TaskCard key={activeTask.id} task={activeTask} /> : null}
      </DragOverlay>
    </VStack>
  );
};
