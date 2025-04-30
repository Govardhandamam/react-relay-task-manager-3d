"use client";

import { RadioButtonField_renderer$key } from "@/__generated__/RadioButtonField_renderer.graphql";
import React, { useState } from "react";
import { useFragment, graphql } from "react-relay";

interface RadioButtonFieldProps {
  renderer: RadioButtonField_renderer$key;
}

const RadioButtonField = ({ renderer }: RadioButtonFieldProps) => {
  const data = useFragment<RadioButtonField_renderer$key>(
    graphql`
      fragment RadioButtonField_renderer on RadioButtonField {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);
    console.log("RadioButtonField changed:", { fieldId: data.id, newValue });
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <div className="space-y-2">
        {data.options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name={data.id}
              value={option}
              checked={selectedValue === option}
              onChange={handleChange}
              className="mr-2"
              required={data.required ?? false}
            />
            <span className="text-gray-700 text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioButtonField;
