import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductDisplay from "../components/Productpage/ProductDisplay";
import ServiceIcons from "../components/ServiceIcons";
import ProductsShowcase from "../components/Homepage/HomePageProductsShowcase";
import Separator from "../components/Separator";

const ProductPage = () => {
  const { id } = useParams();
  const { motorcycles, loading, error } = useFetchMotorcycles();
  const [motorcycle, setMotorcycle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (motorcycles.length > 0) {
      const foundMotorcycle = motorcycles.find(
        (moto) => moto.id === parseInt(id, 10)
      );
      setMotorcycle(foundMotorcycle);
    }
  }, [motorcycles, id]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!motorcycle) return <p>Motorcycle not found.</p>;

  return (
    <>
      <Breadcrumbs />
      <ProductDisplay
        motorcycle={motorcycle}
        toggleModal={toggleModal}
        modalOpen={modalOpen}
      />
      <Separator />

      <ProductsShowcase
        productNumber={4}
        subtitle={"Check out some more motorcycles from our stable"}
        modalOpen={modalOpen}
      />
      <Separator />
      <ServiceIcons />
    </>
  );
};

export default ProductPage;
