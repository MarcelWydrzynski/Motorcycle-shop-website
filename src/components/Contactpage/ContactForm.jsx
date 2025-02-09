import React from "react";
import { TextInput, Textarea } from "flowbite-react";

const ContactForm = () => {
  return (
    <div className="flex px-8 py-10 shadow-lg flex-1 flex-col gap-y-10 max-[1000px]:w-full">
      <div className="flex gap-8">
        {" "}
        <div>
          <TextInput
            id="base"
            type="text"
            sizing="lg"
            placeholder="Your name"
          />
        </div>
        <div>
          <TextInput
            id="email"
            type="email"
            sizing="lg"
            required
            placeholder="Your email"
          />
        </div>
        <div>
          <TextInput
            id="base"
            type="number"
            sizing="lg"
            placeholder="Your Phone"
          />
        </div>
      </div>
      <Textarea
        id="comment"
        placeholder="Leave a comment..."
        required
        rows={10}
      />
      <button className="font-semibold btn bg-primaryRed text-white duration-75  hover:bg-white hover:text-primaryRed hover:border-2 hover:border-primaryRed p-4 rounded border-2 self-start max-[1000px]:self-center">
        Send Message
      </button>
    </div>
  );
};

export default ContactForm;
