import React from "react";

import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export const Breadcrumbs = () => {
  return (
    <Breadcrumb aria-label="Default breadcrumb example" className=" self-start px-4 mb-10"> 
      <Breadcrumb.Item href="#" icon={HiHome}>
        Homepage
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">All motorcycles</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
