import { IconButton, VStack } from "@chakra-ui/react";
import { Card, CardBody, HStack } from "@chakra-ui/react";
import { isExpired, Task } from "data/tasks/models";
import { formatDate } from "utils/date";
import { TaskCardRow } from "./task-card-row";
import { TrashIcon } from "components/icons/trash-icon";
import { PenIcon } from "components/icons/pen-icon";
import { useTaskActions } from "data/tasks/hooks";
import { useCallback } from "react";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { deleteTask } = useTaskActions();

  const onDelete = useCallback(
    () => deleteTask(task.id),
    [deleteTask, task.id]
  );

  return (
    <Card variant="info" className="group">
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
            top="16px"
            right="16px"
            spacing="16px"
            opacity={0}
            _groupHover={{ opacity: 1 }} // Кнопки показываются при наведении на карточку
            transition="opacity 0.3s"
          >
            <IconButton
              variant="icon"
              icon={<PenIcon />}
              aria-label="Редактировать"
              onClick={() => {}}
            />
            <IconButton
              variant="icon-danger"
              icon={<TrashIcon />}
              aria-label="Удалить"
              onClick={onDelete}
            />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};
