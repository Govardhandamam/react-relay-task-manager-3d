import { MultiLineTextField_renderer$key } from "@/__generated__/MultiLineTextField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface MultiLineTextFieldProps {
  renderer: MultiLineTextField_renderer$key;
}

function MultiLineTextField({ renderer }: MultiLineTextFieldProps) {
  const data = useFragment<MultiLineTextField_renderer$key>(
    graphql`
      fragment MultiLineTextField_renderer on MultiLineTextField {
        id
        name
        value
        required
      }
    `,
    renderer
  );

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        value={data.value || ""}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        rows={4}
        required={!!data.required}
      />
    </div>
  );
}

export default MultiLineTextField;
