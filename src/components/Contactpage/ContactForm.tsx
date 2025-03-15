import React, { useState, useContext } from "react";
import { TextInput, Textarea } from "flowbite-react";
import { ShopContext } from "../../context/ShopContext";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const { triggerAlert } = useContext(ShopContext);

  const submitForm = () => {
    if (name === "" || mail === "" || phone === "" || comment === "") {
      triggerAlert("Please fill out all inputs on the form");
    } else {
      triggerAlert(
        "Your form has been sent to us. Thank you for your feedback :)"
      );
      setName("");
      setMail("");
      setPhone("");
      setComment("");
    }
  };
  return (
    <div className="flex px-8 py-10 shadow-lg flex-1 flex-col gap-y-10 max-[1000px]:w-full">
      <div className="flex gap-8">
        <div>
          <TextInput
            id="name"
            type="text"
            value={name}
            sizing="lg"
            color="gray"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            className={`border-2 rounded-xl ${name === "" ? "border-primaryRed" : "border-2"}`}
          />
        </div>
        <div>
          <TextInput
            id="email"
            type="email"
            value={mail}
            sizing="lg"
            required
            placeholder="Your email"
            onChange={(e) => setMail(e.target.value)}
            className={`border-2 rounded-xl ${mail === "" ? "border-primaryRed" : "border-2"}`}
          />
        </div>
        <div>
          <TextInput
            id="base"
            type="number"
            value={phone}
            sizing="lg"
            placeholder="Your Phone"
            onChange={(e) => setPhone(e.target.value)}
            className={`border-2 rounded-xl ${phone === "" ? "border-primaryRed" : "border-2"}`}
          />
        </div>
      </div>
      <Textarea
        id="comment"
        placeholder="Leave a comment..."
        value={comment}
        required
        rows={10}
        onChange={(e) => setComment(e.target.value)}
        className={`border-2 rounded-xl ${comment === "" ? "border-primaryRed" : "border-2"}`}
      />
      <button
        onClick={() => submitForm()}
        className=" btn bg-primaryRed text-white duration-75  hover:bg-white hover:text-primaryRed hover:border-2 hover:border-primaryRed p-4 rounded border-2 self-start max-[1000px]:self-center"
      >
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
