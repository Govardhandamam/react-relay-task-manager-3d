import { SingleLineTextField_renderer$key } from "@/__generated__/SingleLineTextField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface SingleLineTextFieldProps {
  renderer: SingleLineTextField_renderer$key;
  onChange?: (value: string) => void;
}

function SingleLineTextField({ renderer, onChange }: SingleLineTextFieldProps) {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        value={data.value || ""}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={!!data.required}
      />
    </div>
  );
}

export default SingleLineTextField;
