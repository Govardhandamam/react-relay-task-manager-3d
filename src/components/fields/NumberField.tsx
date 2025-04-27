import { NumberField_renderer$key } from "@/__generated__/NumberField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface NumberFieldProps {
  renderer: NumberField_renderer$key;
  onChange?: (value: string) => void;
}

function NumberField({ renderer, onChange }: NumberFieldProps) {
  const data = useFragment<NumberField_renderer$key>(
    graphql`
      fragment NumberField_renderer on NumberField {
        id
        name
        value
        required
        min
        max
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
        type="number"
        value={data.value || ""}
        onChange={handleChange}
        min={data.min ?? undefined}
        max={data.max ?? undefined}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={data.required ?? false}
      />
    </div>
  );
}

export default NumberField;
