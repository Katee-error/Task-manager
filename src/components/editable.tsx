import {
  Editable as ChakraEditable,
  EditableInput,
  EditablePreview,
  EditableProps as ChakraEditableProps,
  Text,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, useCallback, useState } from "react";

interface EditableProps {
  isEditing?: boolean;
  initialValue?: string;
  onChange?: (value: string) => void;
}

export function Editable(props: EditableProps) {
  const [value, setValue] = useState<string>(props.initialValue ?? "");
  const onChange = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setValue(value);
      props.onChange?.(value);
    },
    [setValue, props.onChange]
  );

  return props.isEditing ? (
    <Input variant="editable" value={value} onChange={onChange} />
  ) : (
    <Text variant="bold">{value}</Text>
  );
}
