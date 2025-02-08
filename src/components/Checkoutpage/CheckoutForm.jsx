import React from "react";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const CheckoutForm = () => {
  return (
    <form className="flex w-1/2 flex-col gap-4 max-[1000px]:w-full">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Your name" />
        </div>
        <TextInput id="name" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="surname" value="Your surname" />
        </div>
        <TextInput id="surname" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="address" value="Your address" />
        </div>
        <TextInput id="address" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="town" value="Your town/city" />
        </div>
        <TextInput id="town" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="number" value="Your phone number" />
        </div>
        <TextInput id="town" type="number" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput id="email" type="email" required />
      </div>
    </form>
  );
};

export default CheckoutForm;
