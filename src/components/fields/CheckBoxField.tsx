import { CheckBoxField_renderer$key } from "@/__generated__/CheckBoxField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface CheckBoxFieldProps {
  renderer: CheckBoxField_renderer$key;
}

function CheckBoxField({ renderer }: CheckBoxFieldProps) {
  const data = useFragment<CheckBoxField_renderer$key>(
    graphql`
      fragment CheckBoxField_renderer on CheckBoxField {
        id
        name
        checked
        required
      }
    `,
    renderer
  ) as {
    id: string;
    name: string;
    checked: boolean;
    required: boolean;
  };

  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={data.checked}
          className="mr-2"
          required={data.required}
        />
        <span className="text-gray-700 text-sm font-bold">
          {data.name} {data.required && <span className="text-red-500">*</span>}
        </span>
      </label>
    </div>
  );
}

export default CheckBoxField;
