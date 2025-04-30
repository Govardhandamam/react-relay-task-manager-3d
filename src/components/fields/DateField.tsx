import { DateField_renderer$key } from "@/__generated__/DateField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface DateFieldProps {
  renderer: DateField_renderer$key;
}

function DateField({ renderer }: DateFieldProps) {
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
  ) as {
    id: string;
    name: string;
    value?: string;
    required: boolean;
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="date"
        value={data.value || ""}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={data.required}
      />
    </div>
  );
}

export default DateField;
