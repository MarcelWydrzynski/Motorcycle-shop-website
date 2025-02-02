import React, { useState } from "react";
import { Button, Modal } from "flowbite-react";
import SearchFilter from "./SearchFilter";
import useFetchMotorcycleBrands from "../hooks/useFetchMotorcycleBrands";
import useFetchMotorcycleCategories from "../hooks/useFetchMotorcycleCategories";

const MobileFilters = ({
  setCategory,
  selectedCategory,
  setBrand,
  selectedBrand,
  setPrice,
  selectedPrice,
  resetFilters,
}) => {
  const { motorcycleBrands } = useFetchMotorcycleBrands();
  const { motorcycleCategories } = useFetchMotorcycleCategories();
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="max-[1000px]:flex hidden flex-col gap-y-2">
      <Button
        onClick={() => setOpenModal(true)}
        color="light"
        className="focus:outline-none focus:ring-0 active:scale-110 transition-transform "
      >
        Show filters
      </Button>
      <Button
        onClick={() => resetFilters()}
        color="light"
        className="focus:outline-none focus:ring-0 active:scale-110 transition-transform "
      >
       Reset Filters
      </Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Enter your filters</Modal.Header>
        <Modal.Body>
          <div className="self-start flex gap-x-8 flex-wrap gap-y-6 justify-center w-full flex-col items-center">
            <SearchFilter
              text={"Select your Category"}
              options={motorcycleCategories}
              state={selectedCategory}
              stateSetter={setCategory}
            />
            <SearchFilter
              text={"Select your brand"}
              options={motorcycleBrands}
              state={selectedBrand}
              stateSetter={setBrand}
            />
            <SearchFilter
              text={"Select your price"}
              options={[
                "None Selected",
                "Under $10,000",
                "Between $10,000 & $20,000",
                "Above $20,000",
              ]}
              state={selectedPrice}
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
