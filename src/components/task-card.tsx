// import { Task } from "@/types";
import { Button } from "@chakra-ui/react";
import { Card, CardBody, Flex, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";
// import { Pencil } from 'lucide-react';
// import { Trash2 } from 'lucide-react';

// interface Props {
//   // task: Task;
//   // setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
// }

export const TaskCard: React.FC = () => {
  return (
    <Card>
      <CardBody>
        <Flex justifyContent={"space-between"} alignItems={"start"}>
          <Flex alignItems={"center"} gap={"5px"}>
            <Text variant={"regular"}>Начало:</Text>
            <Input>19.01.2025</Input>
          </Flex>
          <Flex alignItems={"center"} gap={"5px"}>
            <Text variant={"regular"}>Окончание:</Text>
            <Input>30.01.2025</Input>
          </Flex>
          <Flex alignItems={"center"} gap={"5px"}>
            <Text variant={"regular"}>Описание::</Text>
            <Input>Сделать тестовое для IP</Input>
          </Flex>
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
        </Flex>
      </CardBody>
    </Card>
  );
};
