import type { ChangeEvent } from "react";
import type { LabelValueType } from "../../types/commonsTypes";

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
  options: LabelValueType[];
};

const SelectInput = ({label, name, value, onChange, options}: Props) => {
  return ( <div className="mb-4">
        <label htmlFor={name} className="block font-semibold">
          {label}
        </label>

        <select
          name={name}
          id={name}
          className="w-full p-2 border rounded-lg"
          value={value}
          onChange={onChange}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div> );
}
 
export default SelectInput;