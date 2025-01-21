import React, { ReactNode } from "react";
import { Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { TaskCard } from "./task/task-card";
import { Task, TaskType } from "data/tasks/models";
import { SortableContext } from "@dnd-kit/sortable";
import { DragOverlay, useDroppable } from "@dnd-kit/core";
import { useActiveDragItem } from "data/tasks/hooks";

interface KanbanColumnProps {
  type: TaskType;
  title: string;
  icon: ReactNode;
  tasks: Task[];
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  type,
  title,
  icon,
  tasks,
}) => {
  const activeTask = useActiveDragItem();

  const { setNodeRef } = useDroppable({ id: type });

  return (
    <VStack
      maxH="100%"
      w="398px"
      minW="398px"
      borderRadius="4px"
      p="32px 16px"
      bgColor="background"
      align="start"
    >
      <HStack spacing="8px" mb={4}>
        {icon}
        <Heading as="h2" variant="h2">
          {title}
        </Heading>
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
