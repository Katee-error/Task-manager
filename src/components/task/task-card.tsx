import { IconButton, VStack } from "@chakra-ui/react";
import { Card, CardBody, HStack } from "@chakra-ui/react";
import { isExpired, Task } from "data/tasks/models";
import { formatDate } from "utils/date";
import { TaskCardRow } from "./task-card-row";
import { TrashIcon } from "components/icons/trash-icon";
import { PenIcon } from "components/icons/pen-icon";
import { useTaskActions } from "data/tasks/hooks";
import { useCallback } from "react";
import { CheckIcon } from "components/icons/check-icon";
import { XIcon } from "components/icons/x-icon";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { onDelete, onEditStart, onEditCancel, onEditApply, isEditing, form } =
    useTaskActions(task);

  return (
    <Card variant="info" className="group">
      <CardBody>
        <VStack
          justifyContent={"space-between"}
          alignItems={"start"}
          spacing="8px"
        >
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
              onClick={onEditStart}
            />
            <IconButton
              variant="icon-danger"
              icon={<TrashIcon />}
              aria-label="Удалить"
              onClick={onDelete}
            />
          </HStack>
          <TaskCardRow
            label="Начало:"
            isEditing={isEditing}
            {...form.startDay}
          />
          <TaskCardRow
            label="Окончание:"
            shouldWarn={isExpired(task)}
            isEditing={isEditing}
            {...form.endDay}
          />
          <TaskCardRow
            label="Описание:"
            isEditing={isEditing}
            textArea
            {...form.text}
          />
          {isEditing ? (
            <HStack alignSelf="end" spacing="8px">
              <IconButton
                icon={<CheckIcon />}
                color="primary"
                variant="icon-button"
                aria-label="Применить изменения"
                onClick={onEditApply}
              />
              <IconButton
                icon={<XIcon />}
                variant="icon-button"
                aria-label="Отмена"
                onClick={onEditCancel}
              />
            </HStack>
          ) : null}
        </VStack>
      </CardBody>
    </Card>
  );
};
