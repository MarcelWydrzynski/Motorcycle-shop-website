import React from "react";
import { Label, Select } from "flowbite-react";

const SearchFilter = ({ text, options }) => {
  return (
    <div className="flex gap-2 items-center max-[500px]:flex-col">
      <div>
        <Label htmlFor={text} value={text} className="" />
      </div>
      <div>
        {" "}
        <Select id="brands" required>
          {options.map((option) => (
            <option>{option}</option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default SearchFilter;
