"use client";

import { SelectDropdownField_renderer$key } from "@/__generated__/SelectDropdownField_renderer.graphql";
import React, { useState } from "react";
import { useFragment, graphql } from "react-relay";

interface SelectDropdownFieldProps {
  renderer: SelectDropdownField_renderer$key;
}

const SelectDropdownField = ({ renderer }: SelectDropdownFieldProps) => {
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

  const [selectedValue, setSelectedValue] = useState(data.value || "");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    console.log("SelectDropdownField changed:", { fieldId: data.id, newValue });
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={selectedValue}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={data.required ?? false}
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
};

export default SelectDropdownField;
