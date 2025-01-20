import { HStack, Text } from "@chakra-ui/react";
import { Editable } from "components/uikit/editable";
import { ReactNode } from "react";

interface TaskCardRowProps {
  label: string;
  initialValue: string;
  isEditing?: boolean;
  shouldWarn?: boolean;
}

export const TaskCardRow = ({
  initialValue,
  label,
  shouldWarn = false,
  isEditing,
}: TaskCardRowProps) => {
  return (
    <HStack alignItems="start" spacing="16px">
      <Text variant="regular">{label}</Text>
      <Editable
        isEditing={isEditing}
        initialValue={initialValue}
        textProps={{
          color: shouldWarn ? "red" : "primaryText",
        }}
      />
    </HStack>
  );
};
