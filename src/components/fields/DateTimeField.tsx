import { DateTimeField_renderer$key } from "@/__generated__/DateTimeField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface DateTimeFieldProps {
  renderer: DateTimeField_renderer$key;
  onChange?: (value: string) => void;
}

function DateTimeField({ renderer, onChange }: DateTimeFieldProps) {
  const data = useFragment<DateTimeField_renderer$key>(
    graphql`
      fragment DateTimeField_renderer on DateTimeField {
        id
        name
        value
        required
      }
    `,
    renderer
  ) as {
    id: string;
    name: string;
    value?: string;
    required: boolean;
  };

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
        type="datetime-local"
        value={data.value || ""}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={data.required}
      />
    </div>
  );
}

export default DateTimeField;
