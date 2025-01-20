import React from "react";
import { Box, Heading, Stack, VStack } from "@chakra-ui/react";
// import { Task } from "../types";
import { TaskCard } from "./task-card";
import { Task } from "data/models";

interface TaskColumnProps {
  title: string;
  //   icon: string;
  tasks: Task[];
  //   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  return (
    <VStack
      maxH="100%"
      w="398px"
      borderRadius="4px"
      p="32px 16px"
      bgColor="background"
      align="start"
    >
      <Heading as="h2" variant={"h2"} mb={4}>
        {title}
      </Heading>
      <Stack spacing={4} overflowY="auto">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Stack>
    </VStack>
  );
};

export default TaskColumn;
