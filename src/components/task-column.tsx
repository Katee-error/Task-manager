import React from "react";
import { Box, Heading, Stack } from "@chakra-ui/react";
// import { Task } from "../types";
import { TaskCard } from "./task-card";

interface TaskColumnProps {
  title: string;
  //   icon: string;
  //   tasks: Task[];
  //   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title }) => {
  return (
    <Box
      w="100%"
      borderRadius="4px"
      p={"32px 16px"}
      bgColor={"rgba(0, 0, 0, 0.7)"}
      minW="250px"
    >
      <Heading as="h2" variant={"h2"} mb={4}>
        {title}
      </Heading>
      <Stack spacing={4}>
        <TaskCard />
        {/* {tasks.map((task) => (
          <TaskCard key={task.id} task={task}  />
        ))} */}
      </Stack>
    </Box>
  );
};

export default TaskColumn;
