import React, { ReactNode } from "react";
import { Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { TaskCard } from "./task/task-card";
import { Task } from "data/tasks/models";

interface KanbanColumnProps {
  title: string;
  icon: ReactNode;
  tasks: Task[];
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({
  title,
  icon,
  tasks,
}) => {
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
      <Stack spacing={4} overflowY="auto">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Stack>
    </VStack>
  );
};
