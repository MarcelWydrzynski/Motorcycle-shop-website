import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import SearchFilter from "./SearchFilter";
import useFetchMotorcycleBrands from "../hooks/useFetchMotorcycleBrands";
import useFetchMotorcycleCategories from "../hooks/useFetchMotorcycleCategories";

const MobileFilters = ({ setCategory, setBrand, setPrice }) => {
  const { motorcycleBrands } = useFetchMotorcycleBrands();
  const { motorcycleCategories } = useFetchMotorcycleCategories();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="max-[1000px]:flex hidden">
      <Button
        onClick={() => setOpenModal(true)}
        color="light"
        className="focus:outline-none focus:ring-0 active:scale-110 transition-transform "
      >
        Show filters
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Enter your filters</Modal.Header>
        <Modal.Body>
          <div className="self-start flex gap-x-8 flex-wrap gap-y-6 justify-center w-full flex-col items-center">
            <SearchFilter
              text={"Select your Category"}
              options={motorcycleCategories}
              stateSetter={setCategory}
            />
            <SearchFilter
              text={"Select your brand"}
              options={motorcycleBrands}
              stateSetter={setBrand}
            />
            <SearchFilter
              text={"Select your price"}
              options={[
                "Under $10,000",
                "Between $10,000 & $20,000",
                "Above $20,000",
              ]}
              stateSetter={setPrice}
            />
            <Button
              color="light"
              className="focus:outline-none focus:ring-0 active:scale-110 transition-transform my-4"
              onClick={() => setOpenModal(false)}
            >
              Show results
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MobileFilters;
