import React from 'react';
import {useFragment, graphql} from 'react-relay';

interface DateFieldProps {
  renderer: {
    __typename: string;
    id: string;
  };
  onChange?: (value: string) => void;
}

function DateField({renderer, onChange}: DateFieldProps) {
  const data = useFragment(
    graphql`
      fragment DateField_renderer on DateField {
        id
        name
        value
        required
      }
    `,
    renderer,
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
        type="date"
        value={data.value || ''}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        required={data.required}
      />
    </div>
  );
}

export default DateField;
