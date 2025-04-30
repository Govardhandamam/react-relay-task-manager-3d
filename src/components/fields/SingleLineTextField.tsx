"use client";

import { SingleLineTextField_renderer$key } from "../../__generated__/SingleLineTextField_renderer.graphql";
import React, { useState } from "react";
import { useFragment, graphql } from "react-relay";

interface SingleLineTextFieldProps {
  renderer: SingleLineTextField_renderer$key;
}

const SingleLineTextField = ({ renderer }: SingleLineTextFieldProps) => {
  const data = useFragment<SingleLineTextField_renderer$key>(
    graphql`
      fragment SingleLineTextField_renderer on SingleLineTextField {
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
    console.log("SingleLineTextField changed:", { fieldId: data.id, newValue });
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={data.required ?? false}
      />
    </div>
  );
};

export default SingleLineTextField;
