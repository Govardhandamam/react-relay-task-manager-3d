import React from 'react';
import {useFragment, graphql} from 'react-relay';

interface SelectDropdownFieldProps {
  renderer: {
    __typename: string;
    id: string;
  };
  onChange?: (value: string) => void;
}

function SelectDropdownField({renderer, onChange}: SelectDropdownFieldProps) {
  const data = useFragment(
    graphql`
      fragment SelectDropdownField_renderer on SelectDropdownField {
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

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {data.name} {data.required && <span className="text-red-500">*</span>}
      </label>
      <select
        value={data.value || ''}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={data.required}>
        <option value="">Select an option</option>
        {data.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectDropdownField;
