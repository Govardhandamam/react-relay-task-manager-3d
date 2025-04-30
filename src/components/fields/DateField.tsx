"use client";

import { DateField_renderer$key } from "../../__generated__/DateField_renderer.graphql";
import React, { useState } from "react";
import { useFragment, graphql } from "react-relay";

interface DateFieldProps {
  renderer: DateField_renderer$key;
}

const DateField = ({ renderer }: DateFieldProps) => {
  const data = useFragment<DateField_renderer$key>(
    graphql`
      fragment DateField_renderer on DateField {
        id
        name
        value
        required
      }
    `,
    renderer
  );

  const [value, setValue] = useState(data.value || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    console.log("DateField changed:", { fieldId: data.id, newValue });
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="date"
        value={value}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={data.required ?? false}
      />
    </div>
  );
};

export default DateField;
