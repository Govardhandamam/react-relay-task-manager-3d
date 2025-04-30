import { SingleLineTextField_renderer$key } from "@/__generated__/SingleLineTextField_renderer.graphql";
import React from "react";
import { useFragment, graphql } from "react-relay";

interface SingleLineTextFieldProps {
  renderer: SingleLineTextField_renderer$key;
}

function SingleLineTextField({ renderer }: SingleLineTextFieldProps) {
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

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        value={data.value || ""}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={!!data.required}
      />
    </div>
  );
}

export default SingleLineTextField;
