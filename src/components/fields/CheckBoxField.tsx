"use client";

import { CheckBoxField_renderer$key } from "../../__generated__/CheckBoxField_renderer.graphql";
import React, { useState } from "react";
import { useFragment, graphql } from "react-relay";

interface CheckBoxFieldProps {
  renderer: CheckBoxField_renderer$key;
}

const CheckBoxField = ({ renderer }: CheckBoxFieldProps) => {
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
  );

  const [checked, setChecked] = useState(data.checked || false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    console.log("CheckBoxField changed:", { fieldId: data.id, newValue });
  };

  return (
    <div className="mb-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className="mr-2"
          required={data.required ?? false}
        />
        <span className="text-gray-700 text-sm font-bold">
          {data.name} {data.required && <span className="text-red-500">*</span>}
        </span>
      </label>
    </div>
  );
};

export default CheckBoxField;
