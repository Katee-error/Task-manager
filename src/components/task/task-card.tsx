import { IconButton, VStack } from "@chakra-ui/react";
import { Card, CardBody, HStack } from "@chakra-ui/react";
import { isExpired, Task } from "data/tasks/models";
import { TaskCardRow } from "./task-card-row";
import { TrashIcon } from "components/icons/trash-icon";
import { PenIcon } from "components/icons/pen-icon";
import { useTaskActions } from "data/tasks/hooks";
import { CheckIcon } from "components/icons/check-icon";
import { XIcon } from "components/icons/x-icon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { CalendarIcon } from "components/icons/calendar-icon";

interface TaskCardProps {
  task: Task;
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const { onDelete, onEditStart, onEditCancel, onEditApply, isEditing, form } =
    useTaskActions(task);
  const [editHover, setEditHover] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, disabled: isEditing || editHover });

  return (
    <Card
      variant="info"
      className="group"
      ref={setNodeRef}
      transform={CSS.Transform.toString(transform)}
      transition={transition}
      {...attributes}
      {...listeners}
      // Library incorrectly sets opacity through element styles, so this hack with !important is required
      opacity={isDragging ? "0 !important" : "1 !important"}
    >
      <CardBody>
        <VStack
          justifyContent={"space-between"}
          alignItems={"start"}
          spacing="8px"
        >
          {isEditing ? null : (
            <HStack
              position="absolute"
              top="16px"
              right="16px"
              spacing="16px"
              transition="opacity 0.3s"
              onMouseEnter={() => setEditHover(true)}
              onMouseLeave={() => setEditHover(false)}
            >
              <IconButton
                variant="icon"
                icon={<PenIcon />}
                aria-label="Редактировать"
                onClick={() => {
                  onEditStart();
                  setEditHover(false);
                }}
              />
              <IconButton
                variant="icon-danger"
                icon={<TrashIcon />}
                aria-label="Удалить"
                onClick={onDelete}
              />
            </HStack>
          )}
          <TaskCardRow
            icon={<CalendarIcon boxSize="30px" color="white" />}
            shouldWarn={isExpired(task)}
            isEditing={isEditing}
            {...form.endDay}
          />
          <TaskCardRow isEditing={isEditing} textArea {...form.text} />
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
