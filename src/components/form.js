import React from "react";
import { useForm } from "react-hook-form";

import "../css/form.css";

export default function Form() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>First Name</label>
      <input name="firstName" ref={register({ required: true })} />
      {errors.firstName && <p>This field is required</p>}

      <label>Last Name</label>
      <input name="lastName" ref={register({ required: true })} />
      {errors.lastName && <p>This field is required</p>}

      <label>Email</label>
      <input name="email" ref={register({ required: true })} />
      {errors.email && <p>This field is required</p>}

      <label>Phone Number</label>
      <input name="phoneNumber" ref={register({ required: true })} />
      {errors.phoneNumber && <p>This field is required</p>} 

      <input type="submit" />
    </form>
  );
}
