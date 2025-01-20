import { Text, Input, TextProps, Textarea } from "@chakra-ui/react";
import { ChangeEvent, useCallback } from "react";

interface EditableProps {
  isEditing?: boolean;
  textArea?: boolean;
  initialValue?: string;
  onEdit?: (value: string) => void;
  textProps?: TextProps;
}

export function Editable({
  initialValue,
  onEdit,
  isEditing,
  textArea,
  textProps,
}: EditableProps) {
  const onChange = useCallback(
    ({
      target: { value },
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onEdit?.(value);
    },
    [onEdit]
  );

  return isEditing ? (
    textArea ? (
      <Textarea variant="editable" value={initialValue} onChange={onChange} />
    ) : (
      <Input variant="editable" value={initialValue} onChange={onChange} />
    )
  ) : (
    <Text variant="bold" {...(textProps ?? {})}>
      {initialValue}
    </Text>
  );
}
