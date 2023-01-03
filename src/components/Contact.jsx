import React from "react";
import {
  useNetlifyForm,
  NetlifyFormProvider,
  NetlifyFormComponent,
  Honeypot,
} from "react-netlify-forms";
import { useForm } from "react-hook-form";
import "../css/contact.css";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // destructure needed things from useForm

  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  return (
    <div className="contact-container" id="contact">
      <div className="form-container">
        <form
          name="contact v1"
          method="post"
          data-netlify="true"
          onSubmit={handleSubmit(handleRegistration, handleError)}
        >
          <div className="form-element">
            <input type="hidden" name="form-name" value="contact v1" />
            <label>Name</label>
            <input name="name" {...register("name")} />
            {errors?.name && errors.name.message}
          </div>
          <div className="form-element">
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
            {errors?.name && errors.name.message}
          </div>
          <div className="form-element">
            <label>Subject</label>
            <input name="subject" {...register("subject")} />
          </div>
          <div className="form-element message">
            <label>Message</label>
            <input type="textarea" name="message" {...register("message")} />
          </div>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
