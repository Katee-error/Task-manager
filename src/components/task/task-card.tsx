import { Button, VStack } from "@chakra-ui/react";
import { Card, CardBody, HStack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Editable } from "../uikit/editable";
import { isExpired, Task } from "data/tasks/models";
import { formatDate } from "utils/date";
import { TaskCardRow } from "./task-card-row";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  return (
    <Card variant="info">
      <CardBody>
        <VStack justifyContent={"space-between"} alignItems={"start"}>
          <TaskCardRow
            label="Начало:"
            initialValue={formatDate(task.startDay)}
          />
          <TaskCardRow
            label="Окончание:"
            initialValue={formatDate(task.endDay)}
            shouldWarn={isExpired(task)}
          />
          <TaskCardRow label="Описание:" initialValue={task.text} />
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
