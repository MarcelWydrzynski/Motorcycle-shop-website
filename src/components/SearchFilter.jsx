import React from "react";
import { Label, Select } from "flowbite-react";

const SearchFilter = ({ text, options, state, stateSetter }) => {
  const handleChange = (event) => {
    stateSetter(event.target.value);
  };

  return (
    <div className="flex gap-2 items-center max-[500px]:flex-col">
      <div>
        <Label htmlFor={text} value={text} />
      </div>
      <div>
        <Select id={text} value={state} onChange={handleChange} required>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SearchFilter;
