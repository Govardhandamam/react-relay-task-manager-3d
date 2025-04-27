import { SelectDropdownField_renderer$key } from "@/__generated__/SelectDropdownField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface SelectDropdownFieldProps {
  renderer: SelectDropdownField_renderer$key;
  onChange?: (value: string) => void;
}

function SelectDropdownField({ renderer, onChange }: SelectDropdownFieldProps) {
  const data = useFragment<SelectDropdownField_renderer$key>(
    graphql`
      fragment SelectDropdownField_renderer on SelectDropdownField {
        id
        name
        value
        options
        required
      }
    `,
    renderer
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={data.value || ""}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={!!data.required}
      >
        <option value="">Select an option</option>
        {data.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDropdownField;
