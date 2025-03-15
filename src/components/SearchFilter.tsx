import React from "react";
import { Label, Select } from "flowbite-react";

type SearchFilterProps = {
  text: string;
  options: string[];
  state: string;
  stateSetter: React.Dispatch<React.SetStateAction<string>>;
};

const SearchFilter: React.FC<SearchFilterProps> = ({
  text,
  options,
  state,
  stateSetter,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
