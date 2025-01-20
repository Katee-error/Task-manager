import { HStack, Text } from "@chakra-ui/react";
import { Editable } from "components/uikit/editable";
import { ReactNode } from "react";

interface TaskCardRowProps {
  label: string;
  value: string;
  onEdit: (value: string) => void;
  textArea?: boolean;
  isEditing?: boolean;
  shouldWarn?: boolean;
}

export const TaskCardRow = ({
  value,
  label,
  onEdit,
  shouldWarn = false,
  textArea = false,
  isEditing = false,
}: TaskCardRowProps) => {
  return (
    <HStack alignItems="start" spacing="16px">
      <Text variant="regular">{label}</Text>
      <Editable
        textArea={textArea}
        isEditing={isEditing}
        initialValue={value}
        textProps={{
          color: shouldWarn ? "error" : "primaryText",
        }}
        onEdit={onEdit}
      />
    </HStack>
  );
};
