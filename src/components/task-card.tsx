import { Button, VStack } from "@chakra-ui/react";
import { Card, CardBody, Flex, HStack, Input, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { Editable } from "./editable";
import { Task } from "data/models";
import { formatDate } from "utils/date";

const TaskCardRow = ({ children }: { children: ReactNode }) => {
  return (
    <HStack alignItems={"center"} spacing="16px">
      {children}
    </HStack>
  );
};

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card variant="info">
      <CardBody>
        <VStack justifyContent={"space-between"} alignItems={"start"}>
          <TaskCardRow>
            <Text variant={"regular"}>Начало:</Text>
            <Editable initialValue={formatDate(new Date(task.startDay))} />
          </TaskCardRow>
          <TaskCardRow>
            <Text variant={"regular"}>Окончание:</Text>
            <Editable
              isEditing
              initialValue={formatDate(new Date(task.endDay))}
            />
          </TaskCardRow>
          <TaskCardRow>
            <Text variant={"regular"}>Описание::</Text>
            <Editable isEditing initialValue={task.text} />
          </TaskCardRow>
          <HStack
            position="absolute"
            top="2"
            right="2"
            spacing={2}
            opacity={0}
            _groupHover={{ opacity: 1 }} // Кнопки показываются при наведении на карточку
            transition="opacity 0.3s"
          >
            <Button
              size="sm"
              variant="link"
              aria-label="Редактировать"
              // onClick={task.onEdit}
            >
              {/* <Pencil /> */}
            </Button>
            <Button
              size="sm"
              variant="link"
              aria-label="Удалить"
              // onClick={task.onDelete}
            >
              {/* <Trash2 /> */}
            </Button>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
