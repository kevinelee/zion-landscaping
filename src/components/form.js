/* eslint react/prop-types: 0 */

import React from "react";
import { useForm } from "react-hook-form";

import "../css/form.css";

export default function Form() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  // const FormInput = ({ type, placeholder, name, ref, errorText }) => {
  //   return (
  //     <>
  //       <input type={type} placeholder={placeholder} name={name} ref={ref} />
  //       {errors.name && <p className="mb-3">{errorText}</p>}
  //     </>
  //   );
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.firstName && <p className="mb-3">This field is required</p>}
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.lastName && <p className="mb-3">This field is required</p>}
      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        ref={register({ required: true, minLength: 10, maxLength: 12 })}
      />
      {errors.phone && <p className="mb-3">Please enter valid phone number</p>}
      <input
        type="email"
        placeholder="Email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p className="mb-3">Please enter valid email</p>}

      <textarea
        name="inquiry"
        ref={register({ required: true })}
        placeholder="Inquiry"
      />
      {errors.inquiry && <p>Please let us know what you are interested in!</p>}

      <input className="bg-green-600 hover:bg-green-500" type="submit" />
    </form>
  );
}
