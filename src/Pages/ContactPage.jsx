import React from "react";
import TopHeader from "../components/TopHeader";
import Container from "../components/Container";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FooterComponent from "../components/FooterComponent";
import FullWidthContainer from "../components/FullWidthContainer";
import SeparatorNoLine from "../components/SeparatorNoLine";
import ContactInfo from "../components/Contactpage/ContactInfo";
import ContactForm from "../components/Contactpage/ContactForm";

const AboutPage = () => {
  return (
    <>
      <Header />
      <Breadcrumbs />

      <div className="w-full flex gap-8 max-[1000px]:flex-col">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default AboutPage;
