import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import ContactInfo from "../components/Contactpage/ContactInfo";
import ContactForm from "../components/Contactpage/ContactForm";

const AboutPage = () => {
  return (
    <>
      <Breadcrumbs />
      <div className="w-full flex gap-8 max-[1000px]:flex-col">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
};

export default AboutPage;
