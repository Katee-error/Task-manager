import { HStack} from "@chakra-ui/react";
import { Editable } from "components/uikit/editable";
import { ReactNode } from "react";

interface TaskCardRowProps {
 icon?: ReactNode;
  value: string;
  onEdit: (value: string) => void;
  textArea?: boolean;
  isEditing?: boolean;
  shouldWarn?: boolean;
}

export const TaskCardRow = ({
  value,
  icon,
  onEdit,
  shouldWarn = false,
  textArea = false,
  isEditing = false,
}: TaskCardRowProps) => {
  return (
    <HStack alignItems="start" spacing="2px">
     {icon}
      <Editable
        textArea={textArea}
        isEditing={isEditing}
        initialValue={value}
        textProps={{
          color: shouldWarn ? "error" : "primaryText",
          fontSize: textArea ? '18px': '16px',
          fontWeight: textArea ? '500' : '700'
        }}
        onEdit={onEdit}
      />
    </HStack>
  );
};
