/* eslint react/prop-types: 0 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { navigate } from "gatsby-link";
import "../css/form.css";

// function encode(data) {
//   return Object.keys(data)
//     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

export default function Form() {
  const { register, errors } = useForm();
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    inquiry: "",
    phone: "",
    email: "",
  });
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    // e.preventDefault();
  };

  // const netlifySubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": form.getAttribute("name"),
  //       ...state,
  //     }),
  //   })
  //     .then(() => navigate(form.getAttribute("action")))
  //     .catch((error) => alert(error));
  // };

  return (
    <form
      data-netlify="true"
      onSubmit={()=>handleSubmit()}
      name="contact"
      method="post"
      action="/"
      data-netlify-honeypot="bot-field"
    >
      <label htmlFor="firstName"></label>
      <input
        type="text"
        placeholder="First Name"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={formState.firstName}
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.firstName && <p className="mb-3">This field is required</p>}

      <label htmlFor="lastName"></label>
      <input
        type="text"
        placeholder="Last Name"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={formState.lastName}
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.lastName && <p className="mb-3">This field is required</p>}

      <label htmlFor="phone"></label>
      <input
        id="phone"
        type="tel"
        placeholder="Phone Number"
        name="phone"
        onChange={handleChange}
        value={formState.phone}
        ref={register({ required: true, minLength: 10, maxLength: 12 })}
      />
      {errors.phone && <p className="mb-3">Please enter valid phone number</p>}

      <label htmlFor="email"></label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={formState.email}
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p className="mb-3">Please enter valid email</p>}

      <label htmlFor="inquiries"></label>
      <textarea
        id="inquiry"
        name="inquiry"
        ref={register({ required: true })}
        placeholder="Inquiry"
        onChange={handleChange}
        value={formState.inquiry}
      />
      {errors.inquiry && <p>Please let us know what you are interested in!</p>}

      <input
        className="bg-green-600 hover:bg-green-500 cursor-pointer"
        type="submit"
      />
    </form>
  );
}
