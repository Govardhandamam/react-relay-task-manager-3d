import { useFragment, graphql } from "react-relay";
import RelayMatchContainer from "./RelayMatchContainer";
import type { TaskFieldRenderer_field$key } from "../__generated__/TaskFieldRenderer_field.graphql";

interface TaskFieldRendererProps {
  data: TaskFieldRenderer_field$key;
  onChange?: (value: unknown) => void;
}

export function TaskFieldRenderer({ data, onChange }: TaskFieldRendererProps) {
  const fieldData = useFragment(
    graphql`
      fragment TaskFieldRenderer_field on TaskField {
        renderer @match {
          __typename
          ...NumberField_renderer @module(name: "NumberField")
          ...SingleLineTextField_renderer @module(name: "SingleLineTextField")
          ...MultiLineTextField_renderer @module(name: "MultiLineTextField")
          ...SelectDropdownField_renderer @module(name: "SelectDropdownField")
          ...CheckBoxField_renderer @module(name: "CheckBoxField")
          ...RadioButtonField_renderer @module(name: "RadioButtonField")
          ...StatusField_renderer @module(name: "StatusField")
          ...DateField_renderer @module(name: "DateField")
          ...DateTimeField_renderer @module(name: "DateTimeField")
        }
      }
    `,
    data
  );

  if (!fieldData?.renderer) {
    return null;
  }

  return <RelayMatchContainer match={fieldData.renderer} onChange={onChange} />;
}
