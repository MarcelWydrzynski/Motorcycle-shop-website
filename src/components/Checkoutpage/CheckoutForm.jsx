import { useState } from "react";
import { TextInput, Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const ContactForm = ({ paymentOption }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    address: "",
    town: "",
    number: "",
    mail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Please fill out all inputs");
    } else if (paymentOption === "") {
      alert("Please Select payment option");
    } else {
      console.log("Form submitted:", formData);
      setTimeout(() => {
        alert("Order placed succesfully. You will be returned to the homepage");
        navigate("/");
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-1/2 flex-col gap-4 max-[1000px]:w-full"
    >
      <TextInput
        id="name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className={`border-2 rounded-xl ${formData.name === "" ? "border-primaryRed" : "border-gray-300"}`}
      />
      <TextInput
        id="surname"
        name="surname"
        type="text"
        value={formData.surname}
        onChange={handleChange}
        placeholder="Surname"
        className={`border-2 rounded-xl ${formData.surname === "" ? "border-primaryRed" : "border-gray-300"}`}
      />
      <TextInput
        id="address"
        name="address"
        type="text"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className={`border-2 rounded-xl ${formData.address === "" ? "border-primaryRed" : "border-gray-300"}`}
      />
      <TextInput
        id="town"
        name="town"
        type="text"
        value={formData.town}
        onChange={handleChange}
        placeholder="Town"
        className={`border-2 rounded-xl ${formData.town === "" ? "border-primaryRed" : "border-gray-300"}`}
      />
      <TextInput
        id="number"
        name="number"
        type="text"
        value={formData.number}
        onChange={handleChange}
        placeholder="Phone Number"
        className={`border-2 rounded-xl ${formData.number === "" ? "border-primaryRed" : "border-gray-300"}`}
      />
      <TextInput
        id="mail"
        name="mail"
        type="email"
        value={formData.mail}
        onChange={handleChange}
        placeholder="Email"
        className={`border-2 rounded-xl ${formData.mail === "" ? "border-primaryRed" : "border-gray-300"}`}
      />
      <button
        className="font-semibold btn bg-black text-white duration-75  hover:bg-white hover:text-black hover:border-2 hover:border-black p-4 rounded border-2 self-start max-[1000px]:self-center"
        onClick={handleSubmit}
      >
        Place order
      </button>
    </form>
  );
};

export default ContactForm;
