import { useState, ChangeEvent, FormEvent } from "react";
import { TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import React from "react";

interface ContactFormProps {
  paymentOption: string;
}

type FormDataProps = {
  name: string;
  surname: string;
  address: string;
  town: string;
  number: string;
  mail: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ paymentOption }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    surname: "",
    address: "",
    town: "",
    number: "",
    mail: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Please fill out all inputs");
    } else if (paymentOption === "") {
      alert("Please select a payment option");
    } else {
      console.log("Form submitted:", formData);
      setTimeout(() => {
        alert(
          "Order placed successfully. You will be returned to the homepage"
        );
        navigate("/");
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-1/2 flex-col gap-4 max-[1000px]:w-full"
    >
      {Object.keys(formData).map((field) => (
        <TextInput
          key={field}
          id={field}
          name={field}
          type={field === "mail" ? "email" : "text"}
          value={(formData as any)[field]}
          onChange={handleChange}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className={`border-2 rounded-xl ${
            (formData as any)[field] === ""
              ? "border-primaryRed"
              : "border-gray-300"
          }`}
        />
      ))}
      <button
        className="font-semibold btn bg-black text-white duration-75  hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2 self-start max-[1000px]:self-center"
        type="submit"
      >
        Place order
      </button>
    </form>
  );
};

export default ContactForm;
