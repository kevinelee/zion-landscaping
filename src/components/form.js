import React from "react";
import { useForm } from "react-hook-form";

import "../css/form.css";

export default function Form() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  // if (typeof input["phone"] !== "undefined") {

  //   let pattern = new RegExp(/^[0-9\b]+$/);

  //   if (!pattern.test(input["phone"])) {

  //     isValid = false;

  //     errors["phone"] = "Please enter only number.";

  //   }else if(input["phone"].length != 10){

  //     isValid = false;

  //     errors["phone"] = "Please enter valid phone number.";

  //   }

  // }

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>

    //   <label>First Name</label>
    //   <input name="firstName" ref={register({ required: true })} />
    //   {errors.firstName && <p>This field is required</p>}

    //   <label>Last Name</label>
    //   <input name="lastName" ref={register({ required: true })} />
    //   {errors.lastName && <p>This field is required</p>}

    //   <label>Email</label>
    //   <input name="email" ref={register({ required: true })} />
    //   {errors.email && <p>This field is required</p>}

    //   <label>Phone Number</label>
    //   <input name="phoneNumber" ref={register({ required: true })} />
    //   {errors.phoneNumber && <p>This field is required</p>}

    //   <label>Inquiry</label>
    //   <textarea name="inquiry" ref={register({ required: true })} />
    //   {errors.inquiry && <p>This field is required</p>}

    //   <input className="bg-green-600 hover:bg-green-500" type="submit" />
    // </form>

    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        ref={register({ required: true, maxLength: 80 })}
      />
      {errors.firstName && <p>This field is required</p>}
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        ref={register({ required: true, maxLength: 100 })}
      />
      {errors.lastName && <p>This field is required</p>}
      <input
        type="tel"
        placeholder="Phone Number"
        name="phone"
        ref={register({ required: true, min: 10, maxLength: 12 })}
      />
      {errors.phone && <p>Please enter valid phone number</p> }
      <input
        type="email"
        placeholder="Email"
        name="email"
        ref={register({ required: true, pattern: /^\S+@\S+$/i })}
      />
      {errors.email && <p>Please enter valid email</p>}

      <textarea
        name="inquiry"
        ref={register({ required: true })}
        placeholder="Inquiry"
      />
      {errors.inquiry && <p>Please let us know what you're interested in!</p>}

      <input className="bg-green-600 hover:bg-green-500" type="submit" />
    </form>
  );
}
