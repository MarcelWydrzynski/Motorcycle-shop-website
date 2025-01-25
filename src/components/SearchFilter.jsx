import React from "react";
import { Label, Select } from "flowbite-react";

const SearchFilter = ({ text, options }) => {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <Label htmlFor="brand" value={text} />
      </div>
      <Select id="brands" required>
        {options.map((option) => <option>{option}</option>)}
      </Select>
    </div>
  );
};

export default SearchFilter;
