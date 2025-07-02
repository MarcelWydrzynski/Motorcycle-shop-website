import { useParams } from "react-router-dom";
import useFetchMotorcycles from "../hooks/useFetchMotorcycles";
import ProductDisplay from "../components/Productpage/ProductDisplay";
import ServiceIcons from "../components/ServiceIcons";
import ProductsShowcase from "../components/Homepage/HomePageProductsShowcase";
import Separator from "../components/Separator";
import { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Spinner } from "flowbite-react";
import generateSlug from "../hooks/genertateSlug";

const ProductPage = () => {
 
  const { model } = useParams();
  const { motorcycles, loading, error } = useFetchMotorcycles();
  const [motorcycle, setMotorcycle] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (motorcycles.length > 0) {
      const foundMotorcycle = motorcycles.find(
        (moto) => generateSlug(moto.brand, moto.model) === model
      );
      setMotorcycle(foundMotorcycle);
    }
  }, [motorcycles, model]);

  if (!motorcycle)
    return <Spinner color="failure" aria-label="Failure spinner example" />;

  return (
    <>
      <Breadcrumbs />
      {loading ? (
        <Spinner color="failure" aria-label="Failure spinner example" />
      ) : (
        <ProductDisplay
          motorcycle={motorcycle}
          toggleModal={() => setModalOpen(!modalOpen)}
          modalOpen={modalOpen}
        />
      )}

      <Separator />
      <ProductsShowcase
        productNumber={4}
        subtitle="Check out some more motorcycles from our stable"
        modalOpen={modalOpen}
      />
      <Separator />
      <ServiceIcons />
    </>
  );
};

export default ProductPage;
