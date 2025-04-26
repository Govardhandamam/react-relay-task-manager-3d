import React from 'react';
import {useFragment, graphql} from 'react-relay';

interface RadioButtonFieldProps {
  renderer: {
    __typename: string;
    id: string;
  };
  onChange?: (value: string) => void;
}

function RadioButtonField({renderer, onChange}: RadioButtonFieldProps) {
  const data = useFragment(
    graphql`
      fragment RadioButtonField_renderer on RadioButtonField {
        id
        name
        value
        options
        required
      }
    `,
    renderer,
  ) as {
    id: string;
    name: string;
    value?: string;
    options: string[];
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
      <div className="space-y-2">
        {data.options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name={data.name}
              value={option}
              checked={data.value === option}
              onChange={handleChange}
              className="mr-2"
              required={data.required}
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioButtonField;
