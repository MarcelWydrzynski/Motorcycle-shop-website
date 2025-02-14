import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";
import Container from "../components/Container";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductDisplay from "../components/Productpage/ProductDisplay";
import FooterComponent from "../components/FooterComponent";
import ServiceIcons from "../components/ServiceIcons";
import FullWidthContainer from "../components/FullWidthContainer";
import Separator from "../components/Separator";
import SepartorNoLine from "../components/SeparatorNoLine";

const ProductPage = () => {
  const { id } = useParams(); // Get the dynamic id from the URL
  const { motorcycles, loading, error } = useFetchMotorcycles();
  const [motorcycle, setMotorcycle] = useState(null);

  useEffect(() => {
    if (motorcycles.length > 0) {
      const foundMotorcycle = motorcycles.find(
        (moto) => moto.id === parseInt(id, 10)
      );
      setMotorcycle(foundMotorcycle);
    }
  }, [motorcycles, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!motorcycle) return <p>Motorcycle not found.</p>;

  return (
    <>
      <Breadcrumbs />
      <ProductDisplay motorcycle={motorcycle} />
      <Separator />
      <ServiceIcons />
      <SepartorNoLine />
    </>
  );
};

export default ProductPage;
