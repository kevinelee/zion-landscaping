/* eslint react/prop-types: 0 */

import React from "react";
import { useForm } from "react-hook-form";
import { navigate } from "gatsby-link";
import "../css/form.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const [state, setState] = React.useState({});
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const netlifySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <form
      data-netlify="true"
      onSubmit={handleSubmit(netlifySubmit)}
      name="contact"
      method="post"
      action="/thanks/"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.firstName && <p className="mb-3">This field is required</p>}
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.lastName && <p className="mb-3">This field is required</p>}
      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        onChange={handleChange}
        ref={register({ required: true, minLength: 10, maxLength: 12 })}
      />
      {errors.phone && <p className="mb-3">Please enter valid phone number</p>}
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p className="mb-3">Please enter valid email</p>}

      <textarea
        name="inquiry"
        ref={register({ required: true })}
        placeholder="Inquiry"
        onChange={handleChange}
      />
      {errors.inquiry && <p>Please let us know what you are interested in!</p>}

      <input
        className="bg-green-600 hover:bg-green-500 cursor-pointer"
        type="submit"
      />
    </form>
  );
}
