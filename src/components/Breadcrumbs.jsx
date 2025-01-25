import React from "react";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className="border-2 border-red-50 self-start px-4"> 
      <Breadcrumb.Item href="#" icon={HiHome}>
        Homepage
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">All motorcycles</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
