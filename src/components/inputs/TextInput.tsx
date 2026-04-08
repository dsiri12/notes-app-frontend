import type { ChangeEvent } from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
      Element
    >,
  ) => void;
  required?: boolean;
};

const TextInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor="{ name }" className="block font-semibold">
        {label}
      </label>

      <input
        name={name}
        id={name}
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
