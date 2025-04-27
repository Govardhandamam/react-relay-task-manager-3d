import { StatusField_renderer$key } from "@/__generated__/StatusField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface StatusFieldProps {
  renderer: StatusField_renderer$key;
  onChange?: (value: string) => void;
}

function StatusField({ renderer, onChange }: StatusFieldProps) {
  const data = useFragment<StatusField_renderer$key>(
    graphql`
      fragment StatusField_renderer on StatusField {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "TODO":
        return "bg-gray-200 text-gray-800";
      case "IN_PROGRESS":
        return "bg-blue-200 text-blue-800";
      case "DONE":
        return "bg-green-200 text-green-800";
      case "CANCELLED":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
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
        className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${getStatusColor(
          data.value || ""
        )}`}
        required={!!data.required}
      >
        <option value="">Select a status</option>
        {data.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StatusField;
